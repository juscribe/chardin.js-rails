require "thor"
require "json"
require "httpclient"

class SourceFile < Thor
  include Thor::Actions

  desc "fetch source files", "fetch source files from GitHub"
  def fetch
    account = ask("Which GitHub account's version do you want to fetch? (leave blank for default)")
    account =  'heelhook' if account.empty?
    filtered_tags = fetch_tags(account)
    tag = select("Which tag do you want to fetch?", filtered_tags)
    self.destination_root = "app/assets"
    remote = "https://github.com/#{account}/chardin.js"
    get "#{remote}/raw/#{tag}/chardinjs.min.js", "javascripts/chardinjs.js"
    get "#{remote}/raw/#{tag}/chardinjs.css", "stylesheets/chardinjs.css"

    versionrb = File.readlines('lib/chardinjs-rails/version.rb')
    tag       = tag[1..-1] # Skip the v in the tag
    File.open('lib/chardinjs-rails/version.rb', 'w') do |file|
      versionrb.each do |l|
        l.gsub!(/VERSION = (.*)/, "VERSION = '#{tag}'") if l =~ /VERSION =/
        file << l
      end
    end
  end

  private

  def fetch_tags(account)
    http = HTTPClient.new
    response = JSON.parse(http.get("https://api.github.com/repos/#{account}/chardin.js/tags").body)
    response.map{|tag| tag["name"]}.sort
  end

  def select msg, elements
    elements.each_with_index do |element, index|
      say(block_given? ? yield(element, index + 1) : ("#{index + 1}. #{element.to_s}"))
    end
    result = ask(msg).to_i
    elements[result - 1]
  end
end
