// Generated by CoffeeScript 1.6.1
(function(){var e=[].slice;(function(t,n){var r;return r=function(){function e(e){this.$el=t(e)}return e.prototype.start=function(){var e,t,n,r;if(this._overlay_visible())return!1;this._add_overlay_layer(),r=this.$el.find("*[data-intro]");for(t=0,n=r.length;t<n;t++)e=r[t],this._show_element(e);return this.$el.trigger("chardinJs:start")},e.prototype.toggle=function(){return this._overlay_visible()?this.stop():this.start()},e.prototype.stop=function(){return this.$el.find(".chardinjs-overlay").fadeOut(function(){return this.remove()}),this.$el.find(".chardinjs-helper-layer").remove(),this.$el.find(".chardinjs-show-element").removeClass("chardinjs-show-element"),n.removeEventListener?n.removeEventListener("keydown",this._onKeyDown,!0):document.detachEvent&&document.detachEvent("onkeydown",this._onKeyDown),this.$el.trigger("chardinJs:stop")},e.prototype._overlay_visible=function(){return this.$el.find(".chardinjs-overlay").length!==0},e.prototype._add_overlay_layer=function(){var e,t,n,r=this;return this._overlay_visible()?!1:(t=document.createElement("div"),n="",t.className="chardinjs-overlay",this.$el.prop("tagName")==="BODY"?(n+="top: 0;bottom: 0; left: 0;right: 0;position: fixed;",t.setAttribute("style",n)):(e=this._get_offset(),e&&(n+="width: "+e.width+"px; height:"+e.height+"px; top:"+e.top+"px;left: "+e.left+"px;",t.setAttribute("style",n))),this.$el.get()[0].appendChild(t),t.onclick=function(){return r.stop()},setTimeout(function(){return n+="opacity: .8;",t.setAttribute("style",n)},10))},e.prototype._get_position=function(e){return e.getAttribute("data-position")||"bottom"},e.prototype._place_tooltip=function(e,n){var r,i,s,o,u,a;a=this._get_offset(n),n.style.top=null,n.style.right=null,n.style.bottom=null,n.style.left=null;switch(this._get_position(e)){case"top":case"bottom":s=this._get_offset(e),u=s.width,i=t(n).width(),n.style.left=""+(u/2-a.width/2)+"px";break;case"left":case"right":s=this._get_offset(e),o=s.height,r=t(n).height(),n.style.top=""+(o/2-a.height/2)+"px"}switch(this._get_position(e)){case"left":return n.style.left="-"+(a.width-34)+"px";case"right":return n.style.right="-"+(a.width-34)+"px";case"bottom":return n.style.bottom="-"+a.height+"px";case"top":return n.style.top="-"+a.height+"px"}},e.prototype._show_element=function(e){var t,n,r,i;n=this._get_offset(e),r=document.createElement("div"),i=document.createElement("div"),e.id&&r.setAttribute("data-id",e.id),r.className="chardinjs-helper-layer chardinjs-"+this._get_position(e),r.setAttribute("style","width: "+n.width+"px; height:"+n.height+"px; top:"+n.top+"px; left: "+n.left+"px;"),this.$el.get()[0].appendChild(r),i.className="chardinjs-tooltip chardinjs-"+this._get_position(e),i.innerHTML="<div class='chardinjs-tooltiptext'>"+e.getAttribute("data-intro")+"</div>",r.appendChild(i),this._place_tooltip(e,i),e.className+=" chardinjs-show-element",t="",e.currentStyle?t=e.currentStyle.position:document.defaultView&&document.defaultView.getComputedStyle&&(t=document.defaultView.getComputedStyle(e,null).getPropertyValue("position")),t=t.toLowerCase();if(t!=="absolute"&&t!=="relative")return e.className+=" chardinjs-relative-position"},e.prototype._get_offset=function(e){var t,n,r;t={width:e.offsetWidth,height:e.offsetHeight},n=0,r=0;while(e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop))n+=e.offsetLeft,r+=e.offsetTop,e=e.offsetParent;return t.top=r,t.left=n,t},e}(),t.fn.extend({chardinJs:function(){var n,i,s,o;return o=arguments[0],i=2<=arguments.length?e.call(arguments,1):[],n=t(this[0]),s=n.data("chardinJs"),s||n.data("chardinJs",s=new r(this,o)),typeof o=="string"&&s[o].apply(s,i),s}})})(window.jQuery,window)}).call(this);