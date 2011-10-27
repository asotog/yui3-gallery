YUI.add("gallery-patch-341-charts-2531283",function(d){var b=d.Lang,c=d.StackedColumnSeries,a=d.StackedBarSeries;c.prototype.drawSeries=function(){if(this.get("xcoords").length<1){return;}var u=b.isNumber,D=d.clone(this.get("styles").marker),t=D.width,C=D.height,v=this.get("xcoords"),E=this.get("ycoords"),A=0,B=v.length,x=E[0],k=this.get("type"),g=this.get("graph"),q=g.seriesTypes[k],o,z=this.get("order"),s=this.get("graphOrder"),l,p,e,n,m,r,y,f=z===0,j=B*t;if(b.isArray(D.fill.color)){e=D.fill.color.concat();}if(b.isArray(D.border.color)){n=D.border.colors.concat();}this._createMarkerCache();if(j>this.get("width")){o=this.width/j;t*=o;t=Math.max(t,1);}if(!f){m=q[z-1];r=m.get("negativeBaseValues");y=m.get("positiveBaseValues");if(!r||!y){f=true;y=[];r=[];}}else{r=[];y=[];}this.set("negativeBaseValues",r);this.set("positiveBaseValues",y);for(A=0;A<B;++A){l=v[A];x=E[A];if(!u(x)||!u(l)){if(f){r[A]=this._bottomOrigin;y[A]=this._bottomOrigin;}this._markers.push(null);continue;}if(f){C=Math.abs(this._bottomOrigin-x);if(x<this._bottomOrigin){y[A]=x;r[A]=this._bottomOrigin;}else{if(x>this._bottomOrigin){y[A]=this._bottomOrigin;r[A]=x;x-=C;}else{y[A]=x;r[A]=x;}}}else{if(x>this._bottomOrigin){x+=(r[A]-this._bottomOrigin);C=x-r[A];r[A]=x;x-=C;}else{if(x<=this._bottomOrigin){x=y[A]-(this._bottomOrigin-x);C=y[A]-x;y[A]=x;}}}if(!isNaN(C)&&C>0){l-=t/2;D.width=t;D.height=C;D.x=l;D.y=x;if(e){D.fill.color=e[A%e.length];}if(n){D.border.color=n[A%n.length];}p=this.getMarker(D,s,A);}else{this._markers.push(null);}}this._clearMarkerCache();};c.prototype.updateMarkerState=function(j,h){if(this._markers[h]){var k,f,l=this._getState(j),g=this.get("xcoords"),e=this._markers[h],m=0;k=d.clone(this.get("styles").marker);m=k.width*0.5;f=l=="off"||!k[l]?k:k[l];f.fill.color=this._getItemColor(f.fill.color,h);f.border.color=this._getItemColor(f.border.color,h);f.height=e.get("height");f.x=(g[h]-m);f.y=e.get("y");f.id=e.get("id");e.set(f);}};a.prototype.drawSeries=function(){if(this.get("xcoords").length<1){return;}var t=b.isNumber,C=d.clone(this.get("styles").marker),s=C.width,B=C.height,u=this.get("xcoords"),E=this.get("ycoords"),z=0,A=u.length,v=E[0],j=this.get("type"),g=this.get("graph"),p=g.seriesTypes[j],n,y=this.get("order"),r=this.get("graphOrder"),k,o,l,q,x,e,m,f=y===0,D=A*B;if(b.isArray(C.fill.color)){e=C.fill.color.concat();}if(b.isArray(C.border.color)){m=C.border.colors.concat();}this._createMarkerCache();if(D>this.get("height")){n=this.height/D;B*=n;B=Math.max(B,1);}if(!f){l=p[y-1];q=l.get("negativeBaseValues");x=l.get("positiveBaseValues");if(!q||!x){f=true;x=[];q=[];}}else{q=[];x=[];}this.set("negativeBaseValues",q);this.set("positiveBaseValues",x);for(z=0;z<A;++z){v=E[z];k=u[z];if(!t(v)||!t(k)){if(f){x[z]=this._leftOrigin;q[z]=this._leftOrigin;}this._markers.push(null);continue;}if(f){s=Math.abs(k-this._leftOrigin);if(k>this._leftOrigin){x[z]=k;q[z]=this._leftOrigin;k-=s;}else{if(k<this._leftOrigin){x[z]=this._leftOrigin;q[z]=k;}else{x[z]=k;q[z]=this._leftOrigin;}}}else{if(k<this._leftOrigin){k=q[z]-(this._leftOrigin-u[z]);s=q[z]-k;q[z]=k;}else{if(k>=this._leftOrigin){k+=(x[z]-this._leftOrigin);s=k-x[z];x[z]=k;k-=s;}}}if(!isNaN(s)&&s>0){v-=B/2;C.width=s;C.height=B;C.x=k;C.y=v;if(e){C.fill.color=e[z%e.length];}if(m){C.border.color=m[z%m.length];}o=this.getMarker(C,r,z);}else{this._markers.push(null);}}this._clearMarkerCache();};a.prototype.updateMarkerState=function(k,g){if(this._markers[g]){var m=this._getState(k),n=this.get("ycoords"),e=this._markers[g],l=d.clone(this.get("styles").marker),j=l.height,f=m=="off"||!l[m]?l:l[m];f.fill.color=this._getItemColor(f.fill.color,g);f.border.color=this._getItemColor(f.border.color,g);f.y=(n[g]-j/2);f.x=e.get("x");f.width=e.get("width");f.id=e.get("id");e.set(f);}};},"gallery-2011.10.12-20-24",{requires:["charts"]});