(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[927,357,54,53],[976,282,22,57],[621,0,151,205],[468,414,151,205],[774,0,151,205],[774,414,151,205],[774,207,151,205],[621,414,151,205],[306,621,151,205],[315,0,151,205],[0,602,151,205],[162,207,151,205],[162,414,151,205],[153,621,151,205],[315,207,151,205],[315,414,151,205],[468,0,151,205],[468,207,151,205],[162,0,151,205],[459,621,151,205],[612,621,151,205],[621,207,151,205],[927,282,47,73],[927,0,86,280],[0,0,160,600]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.candleonetallbanner = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.candletwotallbanner = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cookieberries = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cookieeight = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cookieeleven = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cookiefifteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cookiefive = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.cookiefour = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cookiefourteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cookiefrosting = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.cookiegreens = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.cookienine = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.cookieone = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.cookieseven = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.cookieseventeen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.cookiesix = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.cookiesixteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.cookieten = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.cookiethirteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.cookiethree = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.cookietwelve = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.cookietwo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.glasstopright = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.tableclothtall = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.whitetable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whitetable_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.whitetable();
	this.instance.parent = this;
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitetable_1, new cjs.Rectangle(-80,-300,160,600), null);


(lib.tableclothtall_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tableclothtall();
	this.instance.parent = this;
	this.instance.setTransform(-43,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tableclothtall_1, new cjs.Rectangle(-43,-140,86,280), null);


(lib.somethingdelicioustall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AgJBEIgOgDIgDADIgFAAIgCAAIgDgCQgEgEgEgKQgEgLAAgJQAAgEACgDQADgDADAAQAGAAAGALIAFAHQAEAGAGADQAIADAGAAQAJAAAFgFQAFgEAAgHQAAgLgVgLIgHgDQgVgLgHgHQgHgJAAgMQAAgRALgLQANgKASAAIAIAAIAKACIAGgDIAEAAQAHAAAFAKQAGAKABALQAAAFgDADQgCACgDAAQgDAAgDgCQgDgDgEgGQgFgIgFgDQgGgDgGAAQgHAAgFAEQgEAEgBAHQAAAGAGAEQAEAFAQAIIABABQAkARAAAVQAAASgOAMQgOAMgUAAg");
	this.shape.setTransform(49.6,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AAcBCQgBgCAAgEIAAgJIAAgBIgBgBQgCAAgDAEIgBACQgHAGgIADQgGADgKAAQgKAAgJgDQgIgEgGgGQgGgIgCgKQgDgLAAgbIAAgJIAAgJIAAgDQAAgLgCgCQgBgDgEgDIgGgBQgHgCAAgFQAAgDADgCQACgDAJgDIASgEIANgCQAEAAACADQACACgBAGIAAAFIgBAxQAAAaAGAKQAFAJANABQAOgBAGgNQAHgMAAggIAAgKQAAgKgBgCQgCgEgEgCIgGgBQgHgCAAgFQAAgDADgCQACgCAJgEIASgEIAOgCQAEAAABADQABACAAAGIAAAHIgCA1IABAWIAAAJQACAFAGADIADABQAHACAAAEQAAADgCACIgIAFIgSAFQgJADgGAAQgDAAgCgCg");
	this.shape_1.setTransform(36.2,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AgvAxQgSgTAAgdQAAgdATgTQAUgUAcAAQAcAAASASQASATAAAcQAAAdgTAVQgTAUgcAAQgcAAgTgTgAgYgmQgIALAAARQAAAZALARQALASAPAAQAMAAAIgLQAIgLAAgRQAAgZgLgRQgLgSgOAAQgNAAgIALg");
	this.shape_2.setTransform(21.3,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AgWBdQgHgCAAgGQAAgEAHgDIADgBQAEgCABgEQABgFAAgKIAAgIIAAgLIAAgNQAAgVgBgFQgBgGgDgCIgGgCQgIgCAAgFQAAgDADgCQACgCAGgDIAUgGIAMgCQAEAAACACQABADAAAGIAAAHIAAAGIgBAhIAAAAIgBAgIABASQACAFACABIAFADQAHACAAAFQAAAFgGACQgHACgRAAQgTAAgGgCgAgPhBQgGgEAAgHQAAgIAHgFQAGgFAIAAQAIAAAGAFQAFAEAAAIQAAAHgGAFQgGAFgIAAQgJAAgFgFg");
	this.shape_3.setTransform(10.2,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AgpAxQgSgTAAgcQAAgdAUgUQATgUAdAAQAVAAAPALQAPAMAAAPQAAAGgEADQgFAEgGAAQgGAAgEgDQgFgDgEgLQgEgJgFgEQgFgDgIAAQgOAAgIALQgJALAAAUQAAAWAMAPQAMAPASAAQAGAAAGgCQAGgCAFgDIAFgEQAHgGAEAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQABABAAAAQAAAEgDAEIgHAIQgLAJgLAFQgLAEgNAAQgaAAgTgTg");
	this.shape_4.setTransform(0,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AgWBdQgHgCAAgGQAAgEAHgDIADgBQAEgCABgEQABgFAAgKIAAgIIAAgLIAAgNQAAgVgBgFQgBgGgDgCIgGgCQgIgCAAgFQAAgDADgCQACgCAGgDIAUgGIAMgCQAEAAACACQABADAAAGIAAAHIAAAGIgBAhIAAAAIgBAgIABASQACAFACABIAFADQAHACAAAFQAAAFgGACQgHACgRAAQgTAAgGgCgAgPhBQgGgEAAgHQAAgIAHgFQAGgFAIAAQAIAAAGAFQAFAEAAAIQAAAHgGAFQgGAFgIAAQgJAAgFgFg");
	this.shape_5.setTransform(-10.6,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AgVBdQgGgCAAgFQgBgEAGgDIAGgDQACgDABgHIACgaIAAgUIAAgYIAAgKQAAghgCgJQgBgKgDgBIgIgDQgIgDAAgEQAAgDACgDQADgCAKgDIARgFIAMgCQAFAAABADQABACAAAGIAAAKQgBAvAAAuIABAsQAAAKACACIAIAEQAGACAAAFQAAAFgHADQgGACgRAAQgTAAgGgDg");
	this.shape_6.setTransform(-18,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("AgpAxQgTgTAAgcQAAgdATgUQATgUAdAAQAZAAAPAPQAOAOAAAYQAAAIgCADQgCACgKAAIgxAAQgFAAgCgCQgCgCAAgDQAAgEACgCQACgCAFAAIAaAAIAHgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgNgIgJQgJgIgLAAQgPAAgIANQgHAOAAATQAAATAKAPQAKAPAQAAQAKAAAGgCQAHgCAGgFIAFgDQAGgGAEAAQADAAACACQAAABABAAQAAABAAAAQAAABABABQAAAAAAABQAAADgEAFQgDAEgFAEQgMAKgKAEQgLAEgMAAQgbAAgSgTg");
	this.shape_7.setTransform(-28.4,17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("AgcBeIgPgBIgMABIgLAAQgQAAgEgCQgFgCgBgGQABgFAGgDQAHgCACgCQACgDAAgTIABgyIgBgwQAAgUgCgDIgJgEQgGgDgBgFQAAgGAGgCQAGgCAPAAIAMAAIAMABIASgBIAPAAQAvAAAbAZQAaAZABAtQAAAtgbAYQgbAXg0AAgAgchJQgGACgBAEQgCAFgBAPIgBAnIABAxQABAVACAEQABAEAJADQAJACALAAQAeAAAOgSQAPgSAAgkQAAgmgRgUQgRgUggAAQgKAAgGACg");
	this.shape_8.setTransform(-45.3,14.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("AgvBVQgRgKAAgPQAAgGADgEQADgFAIAAQAFAAADADQADAEACAGQADAJAIAGQAIAFARAAQAQAAAMgHQALgGAAgKQAAgGgEgEQgFgDgIAAIgPABIgTABQgXAAgNgIQgMgIAAgKQAAgHAFgGQAEgFAJgGQgHgHgEgIQgEgIAAgKQAAgWAQgOQAQgOAZAAIAMABIAUAEQAFAAAGgCIANgIIAFAEIABAEQAAAGgEAFQgEAFgIAEIAEALIACAKQgBAWgPANQgQANgZAAIgNgBIgNgCIgDAEIgCAFQAAAGAGADQAGADANAAIATgBIAVgCQARAAAKAIQAKAHAAAOQAAAUgUAOQgVAOgfAAQgYAAgQgKgAgUhAQgIAIABANQAAAOAGAIQAGAIALAAQALAAAGgIQAIgIAAgNQAAgOgHgIQgIgIgKAAQgKAAgGAIg");
	this.shape_9.setTransform(58,-9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("Ag/BAQgHgCAAgFQAAgFAHgCIADgCQAEgBABgFQABgEAAgKIAAgJIAAgKIAAgNQAAgUgBgHQgBgGgDgBIgGgCQgIgDAAgEQAAgDADgCQACgDAGgCIATgGIANgCQAEAAABACQACACAAAEIAAAJIAAABIABAAIABAAIAAAAIADgDIADgDQAOgNAQAAQAJAAAJAEQAIAEAGAHQAGAHADAKQACAKAAAVIAAARIAAAIIAAAIQAAAJACAEQABAEADABIADACQAHACAAAFQAAAFgGACQgGACgUAAQgSAAgHgCQgGgCAAgFQAAgFAHgCIAFgCQADgCABgFQABgGAAgOQAAgpgFgKQgGgLgNAAQgGAAgHAFQgGAEgDAHQgDAFgBAKIgBAjQAAANABAEQABAEACACIAFACQAHACAAAFQAAAFgGADQgHACgRAAQgUAAgGgDg");
	this.shape_10.setTransform(42.8,-11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("AgWBdQgHgCAAgGQAAgEAHgDIADgBQAEgCABgEQABgFAAgKIAAgIIAAgLIAAgNQAAgVgBgFQgBgGgDgCIgGgCQgIgCAAgFQAAgDADgCQACgCAGgDIAUgGIAMgCQAEAAACACQABADAAAGIAAAHIAAAGIgBAhIAAAAIgBAgIABASQACAFACABIAFADQAHACAAAFQAAAFgGACQgHACgRAAQgTAAgGgCgAgPhBQgGgEAAgHQAAgIAHgFQAGgFAIAAQAIAAAGAFQAFAEAAAIQAAAHgGAFQgGAFgIAAQgJAAgFgFg");
	this.shape_11.setTransform(31.3,-14.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("AASBdQgGgCgBgFQABgFAGgCIAFgDQADgBACgFIAAgUQAAgqgFgJQgFgLgOAAQgGAAgGAEQgGAFgEAFQgDAGgBAKIgBAkIABARQABAEADABIAFADQAGACAAAFQAAAFgGACQgGACgRABQgUAAgHgDQgGgCAAgGQAAgEAGgCIADgCQAEgCACgFQABgFAAgPIAAgVIAAgUIAAg7QgBgNgCgEQgCgBgHgCQgIgDAAgEQgBgDAEgDQADgCAMgFIAMgEIAMgBQAFAAACADQABACAAAGIAAAFIgBA1IAAAGIABADIACABIADgDIAEgFQAHgHAHgDQAHgDAIAAQAWAAALAOQALAPAAAcIAAANIAAAWIAAAIQAAAHACACQABADACACIAEACQAGACAAAEQAAAGgGACQgGADgUAAQgSgBgGgCg");
	this.shape_12.setTransform(19.8,-14.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("AgGBOQgHgCgFgEQgEgEgCgHQgBgIgBgTIAAhFIgLAAIgFgBIgBgDIAAgEQAAgEAOgLIAFgFIAGgEQANgMAFAAIADABQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAABIAAAYIAdAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABIAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgbAAIgCABIgBADIAABAQAAARADAEQADAEAHAAQAEAAAHgCIAJgCQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQgBAHgKAHQgLAGgOAAQgIAAgGgCg");
	this.shape_13.setTransform(7.7,-12.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("AgpAxQgTgTAAgcQAAgdATgUQATgUAdAAQAZAAAPAPQAOAOAAAYQAAAIgCADQgCACgKAAIgxAAQgFAAgCgCQgCgCAAgDQAAgEACgCQACgCAFAAIAaAAIAHgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgNgIgJQgJgIgLAAQgPAAgIANQgHAOAAATQAAATAKAPQAKAPAQAAQAKAAAGgCQAHgCAGgFIAFgDQAGgGAEAAQADAAACACQAAABABAAQAAABAAAAQAAABABABQAAAAAAABQAAADgEAFQgDAEgFAEQgMAKgKAEQgLAEgMAAQgbAAgSgTg");
	this.shape_14.setTransform(-3.9,-11.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AhpBAQgGgCAAgFQAAgFAGgCIAEgCQADgBABgFQACgEAAgKIAAgJIAAgKIAAgIQAAgXgBgHQgCgIgCgBIgGgCQgIgDAAgEQAAgDACgCIAIgFIAUgGIAMgDQAEAAACACQABADABAEIAAAHIAAACIAAABIABAAIAAAAIABAAIADgDIABgBQAQgPAQAAQAGAAAGACQAFACAFADQAEAEAFAGIAGAFQACAAAEgEIAFgFQAJgIAGgCQAGgDAIAAQAPAAALAGQAMAGAFALQAGAMAAAmIAAAMIAAAIIgBAGQAAAHACADQABAEADABIAEACQAGACAAAFQAAAFgGACQgGACgUAAQgTAAgGgCQgGgCAAgFQAAgFAGgCIAFgCQADgCACgGIABgWQAAgmgFgKQgGgLgNAAQgPAAgHAOQgHANAAAeIAAAIQAAAOACAEQABAFAEABIADACQAGACAAAFQAAAFgGACQgGACgUAAQgRAAgGgCQgGgCAAgFQAAgFAGgCIAFgCQADgCABgFIABgUQAAgpgFgKQgFgLgOAAQgHAAgGAFQgGAEgEAHQgDAGgBAKQgBAKAAAYIABARQABAEADACIAFACQAGACAAAFQAAAFgGADQgGACgSAAQgTAAgHgDg");
	this.shape_15.setTransform(-22.8,-11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("AgvAxQgSgTAAgdQAAgdATgTQAUgUAcAAQAcAAASASQASATAAAcQAAAdgTAVQgTAUgcAAQgcAAgTgTgAgYgmQgIALAAARQAAAZALARQALASAPAAQAMAAAIgLQAIgLAAgRQAAgZgLgRQgLgSgOAAQgNAAgIALg");
	this.shape_16.setTransform(-41.9,-11.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006F46").s().p("AgfBeQgPgEgJgFQgFgDgEgLQgDgLAAgPQAAgGACgDQACgDAFAAQAGAAAGAMIAEAFQAIAPAKAGQAJAGAOAAQANABALgJQAJgIAAgNQAAgSgmgRIgEgBQgggNgKgMQgKgMAAgRQAAgYARgPQASgPAbAAIAOABIASAEIAGgDIAEgBQADAAADABQACADADAFQAEAHADAJQACAIAAAHQAAAEgCADQgCACgDAAQgHABgHgKIgBgDQgIgKgJgEQgIgEgLgBQgOAAgIAIQgJAGAAAMQABAKAGAIQAIAGAaANIAGACQAXAJAKAJQAHAGAFAJQADAJAAAKQAAAbgSAPQgTAPggAAQgQAAgOgDg");
	this.shape_17.setTransform(-56.8,-14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.somethingdelicioustall, new cjs.Rectangle(-66.4,-31.9,132.9,63.9), null);


(lib.signupgfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRArIgHgEIgGgFIALgLQADAFAGADQAFACAFAAIAFgBIAFgCIAEgEIABgGQAAgEgBgCIgEgEIgHgDIgHgCIgIgDIgHgEQgDgDgCgEQgCgEAAgHQAAgGADgFQACgFAFgDQAEgDAGgCQAGgCAFAAQAHAAAHADIAGADIAGAEIgKALQgDgDgEgCQgFgCgFAAIgEAAIgFACIgEAEQgBADAAADIABAFIADADIAGADIAGACIAIADIAJAEQAEADACAEQACAFAAAGQAAAHgCAGQgDAFgEADQgEAEgGACQgGACgGAAQgIAAgJgEg");
	this.shape.setTransform(43.9,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAsIAAhXIAPAAIAABJIAkAAIAAAOg");
	this.shape_1.setTransform(37.8,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAsIAAhXIAPAAIAABXg");
	this.shape_2.setTransform(32.4,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbAsIgIgUIgmAAIgIAUIgRAAIAmhXIANAAIAmBXgAAOAKIgOgjIgNAjIAbAAg");
	this.shape_3.setTransform(26.3,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgAsIAAhGIgbBGIgKAAIgahGIAABGIgQAAIAAhXIAZAAIAWA+IAXg+IAZAAIAABXg");
	this.shape_4.setTransform(16.1,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAsIAAhXIA5AAIAAANIgqAAIAAAXIAoAAIAAAMIgoAAIAAAZIAsAAIAAAOg");
	this.shape_5.setTransform(6.8,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOAsIgTglIgMAAIAAAlIgPAAIAAhXIAeAAQAGAAAFABQAGABAFADQAEADADAFIACAGIABAGQAAAKgGAGQgFAFgJACIAXAngAgRgFIANAAIAGgBIAGgBQADgCABgCQACgDAAgEQAAgEgCgCIgEgEIgFgCIgGAAIgOAAg");
	this.shape_6.setTransform(-3.9,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSArQgIgDgHgHQgHgGgDgIQgDgJgBgKQABgKADgIIAEgIIAGgHIAHgFIAIgEQAJgEAJAAQAKAAAJAEIAIAEIAHAFQADADADAEIAEAIQADAIABAKQgBAKgDAJQgEAIgGAGQgDAEgEACIgIAEQgJAEgKAAQgJAAgJgEgAgMgdQgFACgEAFQgEAEgCAGQgCAGgBAGQABAHACAGQACAGAEAEQAEAFAFACQAHACAFAAQAHAAAGgCQAFgCAEgFQAEgEADgGQACgGAAgHQAAgGgCgGQgDgGgEgEQgEgFgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_7.setTransform(-13.5,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAsIAAhXIA3AAIAAANIgoAAIAAAZIAmAAIAAAMIgmAAIAAAlg");
	this.shape_8.setTransform(-22.1,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeAsIAAhXIAdAAQAHAAAFABQAGABAFAEQAEADACAFQADAEAAAHIgBAHIgCAGQgCAFgFACQgFADgGABQgGACgHAAIgMAAIAAAkgAgPgFIALAAIAHAAIAGgCQADgCABgCQACgDAAgEQAAgEgCgCQgBgCgDgCIgGgCIgGAAIgMAAg");
	this.shape_9.setTransform(-32.5,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNArQgHgDgFgEIgEgFIgDgGIgCgHIgBgHIAAg4IAQAAIAAA3IABAHQABAFACACIAGAGQAEABAFAAQAFAAAEgBQAEgCACgEQADgCABgFIABgHIAAg3IAQAAIAAA4IgBAHIgCAHQgDAHgFAEQgFAEgGADQgHACgHAAQgHAAgGgCg");
	this.shape_10.setTransform(-41.1,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASAsIgohDIgBAAIAABDIgPAAIAAhXIAUAAIApBBIAAhBIAQAAIAABXg");
	this.shape_11.setTransform(-53.5,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLArIgIgEQgFgCgDgEQgGgGgDgIQgEgJAAgKQAAgKAEgIIAEgIQACgEAEgDIAHgFIAIgEQAJgEAJAAIAKABIAJADQAJADAGAFIgMALQgCgDgHgDIgGgCIgHgBQgHAAgFADQgFACgEAFQgEAEgCAGQgCAGgBAGQABAHACAGQACAGAEAEQAEAFAFACQAGACAHAAQAKAAAIgDIAAgWIgTAAIAAgMIAiAAIAAAtIgPAFQgLACgHAAQgLAAgIgEg");
	this.shape_12.setTransform(-63.4,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHAsIAAhXIAPAAIAABXg");
	this.shape_13.setTransform(-69.8,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRArIgHgEIgGgFIALgLQADAFAGADQAFACAFAAIAFgBIAFgCIAEgEIABgGQAAgEgBgCIgEgEIgHgDIgHgCIgIgDIgHgEQgDgDgCgEQgCgEAAgHQAAgGADgFQACgFAFgDQAEgDAGgCQAGgCAFAAQAHAAAHADIAGADIAGAEIgKALQgDgDgEgCQgFgCgFAAIgEAAIgFACIgEAEQgBADAAADIABAFIADADIAGADIAGACIAIADIAJAEQAEADACAEQACAFAAAGQAAAHgCAGQgDAFgEADQgEAEgGACQgGACgGAAQgIAAgJgEg");
	this.shape_14.setTransform(-75.3,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,-9.1,146.4,19.4);


(lib.partyreadyrecipeswideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AgJBEIgNgDIgFADIgDAAIgEAAIgCgCQgFgEgDgKQgEgLAAgJQAAgEADgDQACgDADAAQAGAAAGALIAFAHQAEAGAHADQAGADAHAAQAJAAAFgFQAFgEAAgHQAAgLgVgLIgIgDQgUgLgHgHQgHgJAAgMQAAgRAMgLQALgKAUAAIAHAAIAKACIAGgDIAEAAQAGAAAHAKQAFAKAAALQAAAFgBADQgCACgFAAQgDAAgCgCQgDgDgEgGQgFgIgFgDQgFgDgIAAQgGAAgFAEQgFAEABAHQAAAGAEAEQAFAFAPAIIACABQAkARAAAVQAAASgOAMQgOAMgVAAg");
	this.shape.setTransform(41.1,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AgpAxQgTgTAAgcQAAgdATgUQATgUAdAAQAZAAAPAPQAOAOAAAYQAAAIgCADQgCACgKAAIgxAAQgFAAgCgCQgCgCAAgDQAAgEACgCQACgCAFAAIAaAAIAHgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgNgIgJQgJgIgLAAQgPAAgIANQgHAOAAATQAAATAKAPQAKAPAQAAQAKAAAGgCQAHgCAGgFIAFgDQAGgGAEAAQADAAACACQAAABABAAQAAABAAAAQAAABABABQAAAAAAABQAAADgEAFQgDAEgFAEQgMAKgKAEQgLAEgMAAQgbAAgSgTg");
	this.shape_1.setTransform(28.7,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("Ag+BZQgHgCAAgGQAAgEAGgCIAGgEQADgCABgLQABgKAAggIAAgVQAAgjgBgKQgCgKgDgCIgGgCQgHgDAAgEQAAgDACgDIAIgEIASgGQAIgCAFAAQAEAAABACQACACAAAEIAAAHIAAACIABABIAFgDIAFgEQAIgGAGgDQAIgDAHAAQAZAAAPASQAPASAAAcQAAAegRAUQgRAUgbAAQgLAAgDgDQgFgDAAgFQAAgDACgCQACgCAEAAIADAAIAEABQAPAAAJgMQAIgMAAgUQAAgWgJgNQgKgOgOAAQgNAAgIAIQgIAHAAAUIAABSIABANQABAFABACQACACAGABIAFACIADACIABAEQAAAFgIACQgIACgSAAQgTAAgGgCg");
	this.shape_2.setTransform(13.7,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AgWBdQgHgCAAgGQAAgEAHgDIADgBQAEgCABgEQABgFAAgKIAAgIIAAgLIAAgNQAAgVgBgFQgBgGgDgCIgGgCQgIgCAAgFQAAgDADgCQACgCAGgDIAUgGIAMgCQAEAAACACQABADAAAGIAAAHIAAAGIgBAhIAAAAIgBAgIABASQACAFACABIAFADQAHACAAAFQAAAFgGACQgHACgRAAQgTAAgGgCgAgPhBQgGgEAAgHQAAgIAHgFQAGgFAIAAQAIAAAGAFQAFAEAAAIQAAAHgGAFQgGAFgIAAQgJAAgFgFg");
	this.shape_3.setTransform(2.6,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AgpAxQgSgTAAgcQAAgdAUgUQAUgUAbAAQAWAAAPALQAPAMAAAPQAAAGgEADQgFAEgGAAQgHAAgDgDQgEgDgFgLQgEgJgFgEQgFgDgIAAQgOAAgIALQgJALAAAUQAAAWAMAPQAMAPASAAQAGAAAGgCQAGgCAFgDIAFgEQAHgGADAAQABAAABAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQABABAAAAQAAAEgDAEIgHAIQgLAJgLAFQgLAEgMAAQgbAAgTgTg");
	this.shape_4.setTransform(-7.6,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AgpAxQgTgTAAgcQAAgdATgUQATgUAdAAQAZAAAPAPQAOAOAAAYQAAAIgCADQgCACgKAAIgxAAQgFAAgCgCQgCgCAAgDQAAgEACgCQACgCAFAAIAaAAIAHgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgNgIgJQgJgIgLAAQgPAAgIANQgHAOAAATQAAATAKAPQAKAPAQAAQAKAAAGgCQAHgCAGgFIAFgDQAGgGAEAAQADAAACACQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAADgEAFQgDAEgFAEQgMAKgKAEQgLAEgMAAQgbAAgSgTg");
	this.shape_5.setTransform(-21.2,17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AAcBBQgMgpgJgJQgJgIgNAAQgKAAAAgIQAAgIAIAAQAVAAALgJQAKgIAAgSQAAgQgLgKQgKgIgUAAIgNABQgEABgCAEIgBALIgBAbIAAA5IABAmQABAKADABIAFAEQAIACAAAGQAAAFgHACQgHADgVAAQgUAAgHgDQgIgCAAgFQAAgGAJgDIAFgDQADgCABgQIABg3IgBgxQgBgTgBgDIgJgEQgHgDAAgFQAAgEAEgDQAEgCAJAAIAcAAIAaAAIAUgBQAdAAAPAMQAPAMAAAXQAAARgKAMQgKANgSAFIAAABQAOADAIAJQAIAIAGAVIADANQAFAVAIAAIAEgBIAFAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAQAAAHgHADQgIAFgMAAQgagBgJgeg");
	this.shape_6.setTransform(-37.1,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("Ag7BWQgGgFgBgJQABgGAEgFQAFgFAGAAIAGACIAEADIADAEQAEAFACAAQAHAAAHgJQAHgKgBgKQAAgLgJgVIgBgDIgUgsIgMgaQgDgEgIgEIgFgDQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgGAGgCQAIgCASgBQAUAAAGACQAGACAAAGIAAAEIgDADIgEABQgFADgBACIADAKIALAZIAJAZQADAGADABQABgBADgGIAJgUIAJgaIADgMQAAgFgHgDQgIgFABgDQAAgFAFgCQAGgCAPAAQAPAAAGACQAGACAAAGQAAAFgIACIgFABQgHAEgJAXIgEAJIgRAqQgUA2gOAQQgOAQgSAAQgKABgGgGg");
	this.shape_7.setTransform(66.3,-8.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("Ag5BPQgOgSAAgcQAAggARgTQARgUAdAAIAIABQAEABACADQADADAAAEQgBAGgIAAIgEAAIgCAAQgPAAgJAMQgJALAAAUQAAAWAKAOQAJAOAPAAQANAAAHgIQAIgIAAgOIAAgkIAAg7QAAgJgCgDQgBgEgGgCIgDgBQgIgCAAgFQAAgDADgDQAEgCAKgEIAOgEIAMgBQAEAAADACQACADAAAFIgBAHIgBBPIABA3QABAMABACIAKADQAHACAAAEQgBAGgSAGIgOAEIgKABQgDAAgBgCQgCgCAAgFIAAgGIgBgCIAAgBIgEACIgGAFQgHAGgHACQgIADgHAAQgZAAgQgRg");
	this.shape_8.setTransform(52.4,-14.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("AAXA9IgHgHIgFADQgQALgQAAQgTAAgMgLQgLgLAAgSQAAgVAPgKQAPgNAbAAQAGABADACQAEACAAAEQAAAHgJAAQgNABgHAFQgIAHAAALQAAAKAHAHQAGAFAMAAQAMABAFgGQAFgFAAgOIAAgxQAAgLgFgHQgFgFgIAAQgGAAgGACQgFADgFAGIgDADQgIAKgJAAQgFAAgDgDQgDgDAAgGQAAgMAPgIQAPgJAYAAQANAAALAEQAKADAGAIQAEAFABAIQACAIAAATIAAAoIABAMQACADACABIAEABQAIACAAAEQAAAHgIAFQgJAFgMAAQgFAAgHgHg");
	this.shape_9.setTransform(37.4,-11.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("AgpAxQgTgTAAgcQAAgdATgUQATgUAdAAQAZAAAPAPQAOAOAAAYQAAAIgCADQgCACgKAAIgxAAQgFAAgCgCQgCgCAAgDQAAgEACgCQACgCAFAAIAaAAIAHgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgNgIgJQgJgIgLAAQgPAAgIANQgHAOAAATQAAATAKAPQAKAPAQAAQAKAAAGgCQAHgCAGgFIAFgDQAGgGAEAAQADAAACACQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAADgEAFQgDAEgFAEQgMAKgKAEQgLAEgMAAQgbAAgSgTg");
	this.shape_10.setTransform(23.4,-11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("AAcBBQgMgqgJgIQgJgIgNAAQgKAAAAgIQAAgIAIAAQAVAAALgIQAKgJAAgRQAAgSgLgIQgKgJgUAAIgNABQgEACgCADIgBAMIgBAaIAAA4IABAnQABAKADACIAFACQAIADAAAGQAAAFgHADQgHACgVAAQgUAAgHgCQgIgDAAgFQAAgFAJgEIAFgCQADgDABgPIABg4IgBgxQgBgTgBgCIgJgFQgHgDAAgFQAAgFAEgCQAEgCAJAAIAcAAIAagBIAUgBQAdAAAPANQAPAMAAAXQAAARgKANQgKAMgSAFIAAACQAOACAIAIQAIAJAGAVIADAOQAFATAIAAIAEAAIAFAAQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAABQAAAFgHAFQgIADgMAAQgaABgJgfg");
	this.shape_11.setTransform(7.5,-14.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("AgfAMQgBgBAAgEIABgGIADgHQABgDACgCIAIgBIAGAAIALAAIAWAAIADgBQAFAAABACQACABAAAEQAAAHgEAGQgEAGgGAAIgGAAIgHgBIgcABIgDABQgEAAgCgCg");
	this.shape_12.setTransform(-6.5,-11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("Ag7BWQgHgFAAgJQAAgGAFgFQAFgFAGAAIAGACIAEADIAEAEQADAFACAAQAHAAAHgJQAHgKgBgKQAAgLgJgVIgBgDIgVgsIgLgaQgDgEgHgEIgGgDQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgGAGgCQAIgCASgBQAUAAAGACQAGACAAAGIAAAEIgDADIgFABQgEADgBACIADAKIALAZIAJAZQAEAGACABQABgBADgGIAIgUIAKgaIADgMQAAgFgHgDQgIgFABgDQgBgFAHgCQAFgCAPAAQAPAAAGACQAFACABAGQAAAFgIACIgFABQgIAEgIAXIgEAJIgRAqQgVA2gNAQQgOAQgSAAQgKABgGgGg");
	this.shape_13.setTransform(-17.3,-8.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("AgGBOQgGgCgGgEQgEgEgCgHQgCgIAAgTIAAhFIgMAAIgDgBIgBgDIAAgEQAAgEANgLIAGgFIAEgEQAOgMAFAAIADABQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAABIAAAYIAcAAQABAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQABAAAAABIAAAEQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAgBAAIgaAAIgCABIgBADIAABAQAAARADAEQADAEAHAAQAFAAAGgCIAJgCQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQABAHgMAHQgLAGgOAAQgHAAgGgCg");
	this.shape_14.setTransform(-28.4,-12.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AgnBAQgGgCAAgFQAAgFAGgCIADgCQAEgBABgFQACgEAAgKIgBgJIAAgKIAAgIQAAgXgBgHQAAgIgDgBIgGgCQgIgDAAgEQAAgDACgDQACgCAGgCIASgGIALgCQAHAAACASIAAACIABABQAGgLAHgFQAIgGAHAAQAJAAAFAGQAGAFAAAJQAAAJgEAGQgEAFgIAAIgHgCIgEgDIgDgGQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQgIAAgEANQgDAMAAAnQAAALABAGQABAFAEACIAFACQAIACAAAFQAAAFgHACQgIADgRAAQgTAAgHgDg");
	this.shape_15.setTransform(-37.8,-11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("AAXA9IgHgHIgFADQgQALgQAAQgTAAgMgLQgLgLAAgSQAAgVAPgKQAPgNAbAAQAGABADACQAEACAAAEQAAAHgJAAQgNABgHAFQgIAHAAALQAAAKAHAHQAGAFAMAAQAMABAFgGQAFgFAAgOIAAgxQAAgLgFgHQgFgFgIAAQgGAAgGACQgFADgFAGIgDADQgIAKgJAAQgFAAgDgDQgDgDAAgGQAAgMAPgIQAPgJAYAAQANAAALAEQAKADAGAIQAEAFABAIQACAIAAATIAAAoIABAMQACADACABIAEABQAIACAAAEQAAAHgIAFQgJAFgMAAQgFAAgHgHg");
	this.shape_16.setTransform(-49.9,-11.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006F46").s().p("AhDBcQgHgCAAgGQAAgFAIgDIAGgDQADgCABgQIABg3IgBgxQgBgTgCgDIgIgEQgHgDAAgFQAAgFAEgCQAEgDAIAAIAOABIAPAAIAagBIAUgBQAdAAAPANQAOAMAAAZQAAAbgSAPQgSANgiAAQgNAAAAgJQAAgIALAAQAQAAAKgJQAKgIAAgTQAAgSgKgJQgKgIgVAAQgJAAgEABQgEABgBAEIgBAMIgBAbIAAA5IABAlQABAJACACIAGADQAIADAAAFQAAAGgHACQgHADgVAAQgUAAgIgDg");
	this.shape_17.setTransform(-64.4,-14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.partyreadyrecipeswideskyscraper, new cjs.Rectangle(-74.7,-31.9,149.5,63.9), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.logokale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgQQAAgOgKgKQgKgKgPAAQgOAAgKAKgAAMAZIgOgVIgFAAIAAAVIgJAAIAAgzIATAAQARAAAAAPQAAANgNABIAPAWgAgHgDIAGAAQANAAAAgIQAAgHgMAAIgHAAg");
	this.shape.setTransform(130.4,59.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnEaQgVgDgGgEQgKgFAAgNQAAgKAFgHQAHgHAIAAIARAAQAKAAAFgLQACgKABgXIAAl5QgBgXgCgKQgFgLgKAAIgRAAQgIAAgHgHQgFgHAAgKQAAgNAKgFQAGgEAVgDQBdgNBrAAQBOAAA2ASQA0ASAnAoQAlAlAUA5QAUA4AABEQAABNgZA9QgaA+guAlQglAegxAOQgwAOhFAAQhrAAhdgNgAgwjrQgcAFgJALQgKAMAAAhIAAFjQAAAhAUALQAOAHAnADQBMAEAthAQAqg/AAhwQAAhwgqg/Qgrg/hKAAIgeADg");
	this.shape_1.setTransform(62.2,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBlQgFgDAAgHIAAiTQAAgKgMAAIgyAAQgKAAAAgPIABgNQACgIAHAAICfAAQAMAAAAASQAAASgLAAIgyAAQgMAAAAAKIABCTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape_2.setTransform(81.2,88.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAFQACADAAAJQAAAKgCADQgDAGgHAAIh5AAQgIAAAAAJIAAAbQAAAKAKAAIBFAAQALAAAAASQAAAQgKAAIhFAAQgLAAAAALIAAAeQAAAKAKAAIB4AAQAKAAAAATQAAARgKAAg");
	this.shape_3.setTransform(52.4,88.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBgIhAhGQgLgJgTAAQgFAAgEAEQgDAFAAAGIAAA8QAAAMgVAAQgRAAAAgNIAAi0QAAgIAFgCQAEgCALAAQASAAAAAMIAAA3QAAANAJAAQALAAAFgDQAEgBAFgFIBJhDQANgLAMAMQAMALgKAKIhAA6QgJAIAJAJIBOBWQAIAIgGAFQgFAFgNAAQgTAAgHgIg");
	this.shape_4.setTransform(22.6,88.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuBeIgfgyQgGgJgKAAIgtAAQgDAAgEADQgEAEABADIAAAyQAAAGgKACIgPAAQgMAAAAgMIAAi5QgBgIAKAAIBqAAQAgAAAUATQAVATAAAfQAAAYgPAPQgIAJgPAKQgHAGADAGIAjAyQAFAIgFADQgEAFgPAAQgQAAgHgJgAg4g4IAAAuQAAAFAEADQAEACAFAAIA+AAQAQAAALgIQALgIAAgRQAAgQgLgJQgLgJgQABIg+AAQgNAAAAAKg");
	this.shape_5.setTransform(-11.1,88.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCBgIgOgbQgCgHgHAAIhTAAQgJAAgEALIgMAXQgDAHgSAAQgWAAAFgMIBZi4QAFgKAKAAQALAAAFAJIBXC6QADAGgJAEQgGACgIAAQgPAAgDgIgAgEgdIgYAyQgDAIAIAAIAwAAQABAAABAAQAAAAABgBQABAAAAAAQAAgBABAAQACgCgCgDIgZgzQgBgDgEAAQgCAAgCADg");
	this.shape_6.setTransform(-44.3,88.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABZBkQgFgDAAgEIgOhsQgCgGgFAAQgDAAgDADIgxA+QgEAGgFAAQgHAAgEgHIgtg7QgCgDgEAAQgFAAgBAHIgOBoQgCALgTAAQgGAAgFgDQgGgDAAgFIAViwQACgJADgEQAEgEALAAQAKAAAFAJIA4BPQAFAHAEAAQAEAAAHgIIA7hQQAEgIALAAQAGAAADACQAEADACAIIAVC1QABALgXAAQgFAAgFgDg");
	this.shape_7.setTransform(-78.1,88.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgTQAmgTAngOQAKgDgDgJQgCgKgNADQg7ALgrgSQgWgJgdgRQghgUgJgEQgvgWg6AZQgVAJgMgLQgLgLAGgXQAXhWBDg3QBKg9BQAXQA0APAlA0QAmA2AfALQATAGgBAPQAAAOgRADQgaAFgjgRQgggPgdgbQgfgcgvgCQgsgCgbAVQgLAIADAHQAEAHAKgDQAggHAdAGQAoAIAbAgQAkAoAuAPQA4ASAugfIAZgWQANgNAMAEQAPAEgBAUQgBAUgTAZQgiAsg+AeQhFAjgeAdQgwAwgTA9QgPAzAABQQAAByAqBAQAqBABKAAQBKAAArhCQAqhBAAhwQAAhfgXg4QgZg6g2gVQgbgKAFgTQAFgUAhgEQA3gGA8AsQBoBOAACjQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape_8.setTransform(14.6,-54.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABnDwQhFg1gYheIgBgCQgCgMgHAAQgGAAgCALIgBACQgYBfhGA1QhIA3hoAAQh+AAhMhQQhMhQAAiFQAAiHBMhRQBLhQCAAAQBpAABHA3QBHA2AXBgQACALAGAAQAHgBACgKIABgBQAXhgBGg1QBHg3BoAAQB/AABNBQQBMBPAACFQAACHhMBRQhNBRiBAAQhmAAhHg3gACniqQgpA/AABuQAABrApA/QAoA9BIAAQBGAAApg/QApg/AAhrQAAhsgqg+QgphAhHAAQhGAAgoA/gAmFiqQgoA/AABuQAABsAoA+QAoA9BIAAQBGAAApg/QApg/AAhrQAAhsgqg+QgphAhHAAQhGAAgoA/g");
	this.shape_9.setTransform(-21,30.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai5EbQgWAAgJgFQgIgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAEgLQADgJAAgYIAAl7QAAgXgDgKQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFvAAQAaAAAEAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOQgEgFgFgNQgFgQgPgFQgNgEggAAIhtAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAFADAdAAIBFAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgTAAgEgXIAAgFQgCgNgIgDQgHgEgbAAIhFAAQgeAAgEAEQgIAFAAAZIAACLQAAAbACAGQAGALAMAAIATAAQAKAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape_10.setTransform(-98.4,30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhTEbIgTgEQgIAAgKAJQgKAIgJAAQgLAAgGgHQgGgGgEgQIgVhUQgCgIAAgJQAAgMAHgIQAIgHAMAAQAMAAAJALIAMARQAWAfAhASQAiASAkAAQApAAAagVQAZgUAAgiQAAghgbgfQgbgdg/gsIhNg2QgSgPgTgWQgggmAAgzQAAg9ArgmQArgmBGAAQAlAAAjAIIAWAFIALACQAJAAALgIIAJgFQAEgCAFAAQASAAAGAYIAUBcQABAEAAAIQAAAIgHAGQgHAGgKAAQgMAAgLgOQgNgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAQAAAaQAAAXAJALQAMASAbAWIApAdQAzAkAWARQAXASAUAUQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgzAAglgNg");
	this.shape_11.setTransform(110.1,30.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah+EYQgLgJgHgYIhJjYQgBgFgEAAQgFAAgBAFIhNDYQgKAagHAHQgNAJgQAAQgTAAgKgJQgLgJgJgYIimm+QgKgagHgHQgHgHgUgFQgOgCgFgFQgFgFAAgLQAAgVAdgBICvAAQAcAAAAAYQAAAKgHAFQgHAFgRABQgOACgGAFQgGAFAAAJQAAAJADAKIBzFHQACAGAFgBQAEAAACgGIA/i2QAIgYgHgYIglhuQgEgJgHgFQgGgEgPgEQgNgDgGgGQgFgEAAgKQAAgaAdAAICnAAQAdAAAAAYQAAASgcAEQgRACgFAFQgGAFAAAMQAAAKAIAZIBfEsQACAFAEAAQAFAAABgGIBdk6QAEgLAAgJQAAgSgdgEQgbgCAAgVQAAgNAHgGQAIgFARgBIElAAQAVABAIAFQAIAFAAAOQAAAKgGAIQgGAGgJAAIgQAAQgLAAgFALQgCAIAAAZIAABtQAAAeAFAGQAGAHAXAAIB0AAQAXAAAHgIQADgDAAgHIABgdIAAhpQAAgbgDgGQgFgLgKAAIgQAAQgKAAgHgGQgGgIAAgKQAAgOAIgFQAJgFAWgBICaAAQAWABAJAFQAJAFAAAOQAAAKgHAIQgGAGgJAAIgSAAQgEAAgEADQgFADgBAFQgDAJAAAYIAAF9QAAAXADAKQABAFAFACQAEADAEABIASAAQAJAAAGAGQAHAIAAAJQAAAOgJAFQgIAGgXAAIiaAAQgWAAgIgGQgIgFAAgOQAAgJAGgIQAHgGAJAAIAQAAQAKAAAFgLQADgGAAgbIAAh8IgBgeQAAgHgDgEQgHgHgXAAIh0AAQgXAAgGAGQgFAHAAAdIAACCQAAAYACAJQAFALALAAIAQAAQAJAAAGAGQAGAIAAAKQAAAOgIAEQgIAGgVAAIiaAAQgWAAgJgGQgIgFAAgOQAAgJAGgIQAHgGAJAAIARAAQAEgBAFgDQAEgCABgFQADgGAAgbIAAl9QAAgwgkAEQgLABgHAKQgIAIgGAWIiHGzQgJAfgKALQgLALgTAAQgTAAgLgJg");
	this.shape_12.setTransform(-74.6,-36.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AihEbQgWAAgIgFQgIgFAAgOQAAgKAGgHQAGgGAJAAIARAAQAEAAAEgDQAEgEACgEQADgIAAgXIAAl/QAAgZgDgJQgDgLgLABIgRAAQgKgBgGgGQgHgHAAgLQAAgNAJgGQAJgFAWAAICcAAQAWAAAJAFQAJAGAAANQAAALgGAHQgHAGgJABIgSAAQgOgBgDALQgDAGAAAcIAAFjQAAAdACAJQACAJAIAFQAGAEALACQALACAagBIAwAAQAvAAAPgfIAIgPQAIgQAPgBQAMAAAFAJQAFAJgEAQIgNBCQgEAVgaAAg");
	this.shape_13.setTransform(69.2,-37.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjREWQgIgGAAgOQAAgJAGgHQAGgGAJAAIARAAQAEAAAEgEQAEgDABgEQAEgIAAgaIAAl7QAAgZgEgIQgBgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgKQAAgNAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QADAQgFAJQgFAIgMAAQgPAAgGgNQgDgCgGgQQgGgQgPgFQgMgEggAAIhQAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAEADAeAAIAmAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAIgOAAQgTAAgEgWIAAgFQgCgNgIgDQgHgEgbAAIgmAAQgeAAgEAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAPAFAiAAIBVAAQAvAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgDAQIgNBCQgDALgHAFQgHAFgOAAIlhAAQgWAAgIgFg");
	this.shape_14.setTransform(114.4,-37.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C6E47").s().p("AqoZNQk7iFjyjyQjyjziFk6QiJlFAAljQAAlkCJlFQCFk6DyjzQDzjyE6iFQFFiJFjAAQFkAAFFCJQE6CFDyDyQDyDzCGE6QCJFFAAFkQAAFjiJFFQiGE6jyDzQjyDyk6CFQlFCJlkAAQljAAlFiJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-175,350,350);


(lib.holidayinspirationwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AARA/QgGgCAAgEQAAgGAGgCIAFgCQADgBABgGQABgFABgOQgBgogFgKQgFgKgOAAQgFAAgGADQgHAFgDAGQgDAGgBAKIgBAiQAAAMABAFQABADADACIAEACQAHACAAAGQAAAEgGACQgHACgQAAQgTAAgGgCQgHgCAAgGQAAgEAGgCIADgBQAEgDABgDQABgFABgKIAAgIIgBgLIAAgLIAAgaQgCgHgDgBIgFgCQgIgDAAgEQAAgDACgCQADgCAGgCIASgHIANgCQADAAACACQACACgBAFIAAAIIAAABIABAAIABAAIAAAAIAEgCIACgDQAOgNAPAAQAJAAAJAEQAIAEAGAHQAGAGADALQACAJAAAVIAAAQIAAAIIAAAHQAAAJABAEQABADAEADIACABQAHACAAAEQAAAGgGACQgGACgUAAQgRAAgGgCg");
	this.shape.setTransform(55.1,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AgtAwQgTgTABgdQgBgbAUgTQASgTAcAAQAbAAASASQARARAAAcQAAAdgTAUQgSATgbAAQgcAAgRgSgAgYglQgHAKAAARQAAAZALARQAKAQAOAAQANAAAIgKQAIgLAAgRQAAgYgLgQQgLgRgOAAQgNAAgIAKg");
	this.shape_1.setTransform(40.5,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AgWBbQgGgCAAgGQAAgEAGgCIAEgCQADgCABgEQABgEAAgKIAAgIIAAgLIAAgNIgBgZQgBgGgCgBIgHgCQgHgDAAgEQAAgDADgCQACgDAGgCIATgGIAMgCQADAAACACQABADABAFIAAAIIgBAGIAAAfIAAABIgBAfIABARQABAFADACIAFACQAGACAAAFQAAAFgGACQgGACgRAAQgTAAgGgCgAgPg/QgFgFAAgGQAAgHAGgGQAFgFAJAAQAHAAAGAFQAFAFABAHQAAAGgHAFQgGAFgHAAQgJAAgFgEg");
	this.shape_2.setTransform(29.7,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AgGBNQgHgDgEgEQgEgEgCgHQgCgHAAgTIAAhDIgMAAIgEgBIAAgDIAAgEQgBgDANgMIAGgFIAEgEQAOgMAFAAIADABIABAEIAAAXIAcAAQABAAABABQABAAAAAAQABAAAAAAQABAAAAABIABAEIAAADIgBAFQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAIgaAAIgCABIAAADIAAA+QAAARACAEQAEADAGAAQAFAAAGgCIAJgBQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAGgLAHQgLAGgNABQgHAAgGgCg");
	this.shape_3.setTransform(21.7,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AAXA8IgHgHIgGADQgPAKgPAAQgTAAgMgLQgLgKAAgSQAAgUAPgLQAPgLAaAAQAGAAAEACQADACAAAEQAAAHgJAAQgMAAgIAHQgHAFAAALQAAALAGAFQAGAHAMAAQAMgBAFgFQAFgGAAgNIAAgvQAAgLgFgHQgEgFgJgBQgGAAgFAEQgGACgEAGIgEADQgHAKgJAAQgFAAgCgDQgEgEAAgFQAAgMAPgJQAPgHAXAAQANAAALAEQAKADAFAHQAEAFABAIQACAHAAASIAAAoIABALQABAEADABIAEABQAIACAAAFQAAAFgJAGQgIAEgMAAQgFAAgGgGg");
	this.shape_4.setTransform(10.5,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AgmA/QgGgCAAgGQAAgEAGgCIADgBQAEgDABgDIABgPIAAgIIAAgLIAAgHQAAgWgBgIQgBgHgDgBIgFgCQgIgDAAgEQAAgDACgCQADgCAFgCIARgGIAMgDQAGAAACASIAAACIAAABQAHgLAHgEQAHgGAHAAQAJAAAFAGQAGAFAAAIQAAAJgEAGQgEAEgIAAIgGgBIgFgDIgDgGQgBAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgJAAgDAMQgDAMAAAmQAAAMABAFQABAGAEABIAFACQAHACAAAGQAAAEgHACQgHACgQAAQgUAAgGgCg");
	this.shape_5.setTransform(-1,16.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AgWBbQgGgCAAgGQAAgEAGgCIADgCQAEgCABgEQACgEgBgKIAAgIIAAgLIAAgNIgBgZQAAgGgDgBIgGgCQgIgDAAgEQAAgDACgCQADgDAFgCIATgGIANgCQAEAAABACQACADAAAFIAAAIIgBAGIgBAfIAAABIAAAfIABARQABAFADACIAEACQAHACAAAFQAAAFgGACQgGACgRAAQgSAAgHgCgAgPg/QgFgFAAgGQAAgHAGgGQAGgFAIAAQAHAAAGAFQAGAFAAAHQgBAGgGAFQgFAFgJAAQgHAAgGgEg");
	this.shape_6.setTransform(-9.8,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("Ag9BXQgGgCAAgGQAAgEAFgCIAHgDQACgDABgKQABgKAAggIAAgUQAAgigBgKQgBgKgDgCIgGgCQgIgCAAgFQAAgDADgCQACgCAFgCIASgGQAIgCAFAAQAEAAABACQACACAAAEIAAAGIAAADIAAABIAFgEIAFgDQAIgGAHgDQAHgDAHAAQAYAAAPASQAPARAAAbQAAAegRAUQgRATgaAAQgLAAgDgDQgEgDAAgFQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQACgCADAAIADABIAEAAQAPAAAIgMQAIgLAAgTQAAgWgJgNQgJgNgOAAQgNAAgHAHQgIAHAAATIAABRIABAMQAAAFACACQACACAFABIAFACIADACIABAEQAAAFgHACQgIACgSAAQgSAAgHgCg");
	this.shape_7.setTransform(-21.3,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("AgJBCIgNgCIgEACIgEABIgDgBIgCgCQgEgDgEgKQgEgLAAgJQAAgEACgDQADgCADAAQAGAAAGAKIAFAHQADAFAHADQAGADAHAAQAIAAAFgEQAFgEAAgHQAAgLgUgKIgHgEQgUgKgHgHQgHgIAAgMQAAgRALgKQAMgLASAAIAIABIAJABIAGgCIAEgBQAGAAAGAKQAGAKAAALQAAAFgCACQgCADgDAAQgDAAgDgDQgDgCgEgGQgFgIgFgDQgFgDgHAAQgGAAgFAEQgEAEAAAHQAAAGAEAEQAFAFAPAHIABABQAkARAAAUQAAASgOAMQgNAMgVAAg");
	this.shape_8.setTransform(-33.9,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("AARA/QgGgCAAgEQAAgGAGgCIAFgCQADgBABgGQABgFAAgOQABgogGgKQgFgKgNAAQgHAAgGADQgFAFgEAGQgDAGgBAKIgBAiQAAAMABAFQABADADACIAFACQAGACAAAGQAAAEgGACQgGACgRAAQgUAAgGgCQgGgCAAgGQAAgEAGgCIAEgBQADgDABgDQABgFAAgKIAAgIIAAgLIAAgLIgBgaQgBgHgCgBIgHgCQgHgDAAgEQAAgDADgCQACgCAGgCIASgHIANgCQAEAAABACQABACABAFIAAAIIAAABIABAAIAAAAIAAAAIADgCIAEgDQANgNAPAAQAKAAAIAEQAJAEAFAHQAGAGACALQADAJAAAVIAAAQIAAAIIAAAHQAAAJABAEQABADADADIAEABQAGACAAAEQAAAGgGACQgGACgTAAQgSAAgGgCg");
	this.shape_9.setTransform(-46.9,16.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("AgaBaQgHgCAAgGQAAgFAIgDIAFgDQADgCACgPIABg3IgBgvQgCgTgCgCQgBgCgGgDQgHgDAAgFQAAgFAFgCQAHgCAWAAQAWAAAGACQAFACAAAFQAAAGgIACIgFADQgCACgCANIgBAqIABA7QABAWACADQABACAHACQAGADAAAFQAAAGgHACQgGACgVAAQgSAAgIgCg");
	this.shape_10.setTransform(-58.5,14.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("Ag6BUQgGgFAAgIQAAgHAEgEQAFgFAGAAIAGABIAEADIADAFQADAFADAAQAGAAAHgKQAGgJAAgKQAAgLgIgUIgCgDIgUgsIgMgYQgCgFgHgDIgBAAQgEgCgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgGAHgCQAGgCATAAQATAAAGACQAGACAAAFIgBAEIgCACIgFACQgFACAAADIADAJIAKAaIAKAXQADAGACAAQABAAADgGIAIgUIAKgZQADgJAAgDQAAgEgHgEQgHgEAAgDQAAgEAFgCQAGgCAPAAQAPAAAFACQAGACAAAFQAAAFgIABIgFACQgHAEgIAWIgEAKIgQAoQgVA0gNAQQgNAQgTAAQgJAAgGgFg");
	this.shape_11.setTransform(38.4,-8.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("AAWA7IgGgGIgFADQgQAKgQAAQgSABgLgLQgMgMAAgRQAAgUAPgLQAPgLAaAAQAGAAADACQADACAAAFQAAAGgIAAQgMAAgIAGQgIAHAAAKQABAKAGAGQAHAGALABQALAAAGgGQAFgGAAgNIAAgvQAAgMgFgFQgEgHgJAAQgGAAgGADQgFADgFAFIgCAEQgIAKgJAAQgFAAgDgEQgDgDAAgFQAAgMAPgJQAPgHAXgBQANAAAKAFQALADAFAHQAEAFACAHQABAJAAARIAAApIABALQABADADAAIAEACQAIACAAAEQAAAHgIAEQgJAGgMgBQgFABgHgIg");
	this.shape_12.setTransform(25.3,-11.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("Ag3BNQgPgRAAgcQAAgfARgSQARgUAbAAIAJABQAEABACADQACADAAADQAAAHgIAAIgDAAIgDAAQgPAAgIALQgJALAAAUQAAAVAKAOQAJANAOAAQANAAAHgHQAHgIABgOIAAgjIAAg5QgBgJgBgEQgCgDgFgCIgDgBQgIgCAAgFQAAgDADgDQADgCAKgEIAOgEIAMgBQAEAAACACQACADAAAFIAAAHIgCBOIABA1QABAMADACIAIACQAHACAAAEQAAAGgTAGIgMAEIgKABQgDAAgCgCQgBgCgBgEIAAgHIAAgCIAAgBIgEADIgGAEQgIAGgGACQgIADgHAAQgYAAgPgRg");
	this.shape_13.setTransform(11.3,-14);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("AgVBbQgHgCAAgGQAAgEAGgCIAEgCQADgCABgEQACgEAAgKIAAgIIgBgLIAAgNIgBgZQgBgGgDgBIgGgCQgHgDAAgEQAAgDADgCQACgDAGgCIATgGIAMgCQADAAACACQABADABAFIAAAIIgBAGIAAAfIAAABIgBAfIABARQABAFADACIAFACQAGACAAAFQAAAFgGACQgGACgRAAQgTAAgFgCgAgPg/QgFgFAAgGQAAgHAGgGQAFgFAJAAQAIAAAFAFQAFAFAAAHQABAGgHAFQgGAFgHAAQgJAAgFgEg");
	this.shape_14.setTransform(-0.4,-14.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AgVBbQgGgCAAgFQAAgEAFgDIAHgDQACgCABgIIABgZIAAgUIgBgXIAAgKQAAgggBgJQgBgJgCgCIgIgCQgIgDAAgEQAAgDACgCQADgDAJgDIARgEIAMgCQAEAAABACQACACAAAGIAAAKQgCAtAAAuIABArQABAJACADIAHADQAGADAAAFQAAAEgGADQgHABgQAAQgTAAgGgCg");
	this.shape_15.setTransform(-7.7,-14.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("AgtAwQgTgTABgdQgBgbAUgTQASgTAcAAQAbAAASASQARARAAAcQAAAdgSAUQgTATgbAAQgcAAgRgSgAgYglQgHAKAAARQAAAZAKARQALAQAOAAQANAAAIgKQAIgLgBgRQABgYgLgQQgLgRgOAAQgNAAgIAKg");
	this.shape_16.setTransform(-18.1,-11.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006F46").s().p("AAdBaQgIgCAAgGQABgFAHgDIAGgDQACgCABgIIABgdIgBgSIAAgFQgCgDgGgBQgGgBgYAAIgaABQgIABgBACIgCAEIgBAJIAAALIACAdQAAAIADACIAFADQAIADgBAFQAAAGgGACQgHACgUAAQgUAAgHgCQgIgCABgGQgBgFAJgDIAFgDQACgCACgQIABg2IgBgvQgBgTgCgCQgBgCgGgDQgIgDABgFQgBgFAGgCQAGgCAXAAQAWAAAGACQAGACgBAFQABAFgIADIgFADQgDACgBAIIgBAlQAAAFAFACQAFACASAAIAKAAIAbgBQAIgBACgBIABgDIABgFIAAgGIgBgfQgBgGgCgCIgGgDQgHgDgBgFQAAgFAHgCQAFgCAXAAQAXAAAFACQAGACAAAFQgBAGgHACIgGADQgDACgBARIgBAzIABAxQABATACADQABACAHACQAHADAAAFQgBAGgGACQgIACgTAAQgVAAgGgCg");
	this.shape_17.setTransform(-34.9,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidayinspirationwideskyscraper, new cjs.Rectangle(-64.7,-31.2,129.5,62.4), null);


(lib.glassestopright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glasstopright();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glassestopright, new cjs.Rectangle(-23.5,-36.5,47,73), null);


(lib.fillyourinboxtall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AASBeQgGgDgBgFQABgFAGgCIAFgDQADgBACgGIAAgTQAAgqgFgKQgFgKgOAAQgGAAgGAFQgHADgDAHQgCAFgCAKIgBAkIABARQABAEADABIAFADQAGACAAAFQAAAFgGADQgHABgQAAQgUABgHgDQgGgCAAgGQAAgEAGgDIADgBQAEgCACgFQABgGAAgOIAAgVIAAgUIAAg7QgBgOgDgDQgBgBgIgCQgHgCAAgFQAAgEADgCQADgCAMgFIAMgEIAMgBQAFABACACQACACgBAGIAAAGIgBA0IAAAGIABADIACABIADgDIAEgFQAHgHAHgDQAHgDAHAAQAXAAALAOQALAPAAAdIAAALIAAAYIAAAHQAAAGACAEQABADACABIAEABQAGADAAAEQAAAGgGACQgGADgVgBQgQAAgHgBg");
	this.shape.setTransform(55.7,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AgGBOQgHgCgEgEQgFgEgCgHQgBgIAAgTIAAhFIgMAAIgFgBIgBgDIAAgEQAAgEAOgLIAFgFIAGgEQANgMAFAAIADABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIAAAYIAeAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgbAAIgCABIgBADIAABAQAAARADAEQACAEAJAAQADAAAHgCIAJgCQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAAAQAAABAAABQABAAAAABQgBAHgKAHQgLAGgOAAQgIAAgGgCg");
	this.shape_1.setTransform(43.6,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AgWBdQgHgCAAgGQAAgEAHgDIADgBQAEgCABgEQABgFAAgKIAAgIIAAgLIAAgNQAAgVgBgFQgBgGgDgCIgGgCQgIgCAAgFQAAgDADgCQACgCAGgDIAUgGIAMgCQAEAAACACQABADAAAGIAAAHIAAAGIgBAhIAAAAIgBAgIABASQACAFACABIAFADQAHACAAAFQAAAFgGACQgHACgRAAQgTAAgGgCgAgPhBQgGgEAAgHQAAgIAHgFQAGgFAIAAQAIAAAGAFQAFAEAAAIQAAAHgGAFQgGAFgIAAQgJAAgFgFg");
	this.shape_2.setTransform(35.1,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AAIAOIgPgoQgIgSgGgDIgEgCQgHgDAAgFQAAgFAGgCQAHgCAUAAQASAAAGACQAGACAAAFIgBAEIgCADIgEACQgGACAAADIADAIIAKAbIAMAZQADAFABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAgBIAGgLIAOggQAFgNAAgEIgBgFIgDgDIgEgCQgGgCAAgEQAAgFAGgCQAGgCAQAAQAOAAAFACQAGACAAAFQAAAFgHACIgEACQgHADgLAbIgDAHIgFALQgeBDgJAAQgIAAgXg1gAhMAHIgDgHIgJgWQgIgWgGgDIgEgCQgIgDAAgFQAAgFAHgCQAHgCAVAAQARAAAHACQAGACAAAFIgBAEIgCADIgEACQgGACAAADIADAKIAKAZIALAYQADAGACAAQAEAAADgHIAFgKIADgEQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQADAAACACQACACAAADQAAADgEAIQgNAegGAJQgGAKgFAAQgJAAgag8g");
	this.shape_3.setTransform(21,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AAMA/QgHgCAAgFQAAgEAFgDQADgCAAgBQAAgDgFgJIgXgiIgVgfQgHgKgFgEIgIgDQgFgCAAgEQgBgGAHgCQAHgCAQAAQASAAAIACQAGACAAAFQAAAEgEADQgEACAAACQAAADAOAVIABABIAFgGQAMgSAAgBQAAgBgFgDQgEgDgBgEQABgFAGgCQAHgCANAAQALAAAGACQAFACAAAFQAAAFgJADIgGADQgHADgHAJQgIAKgKARIAXAiQAIALAEAEIAJAEQAIACgBAFQAAAGgGACQgHACgRAAQgRAAgIgCgAg9A/QgFgCgBgFQAAgGAKgCIAHgDQAEgCAGgIIAMgQIAEgEIAEgBQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQABACAAADQAAADgDAEQgKAOAAADQAAABAFADQAFACAAAEQAAAFgGADQgHACgOAAQgLAAgGgCg");
	this.shape_4.setTransform(-3.5,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AgvAxQgSgTAAgdQAAgdATgTQAUgUAcAAQAcAAASASQASATAAAcQAAAdgTAVQgTAUgcAAQgcAAgTgTgAgYgmQgIALAAARQAAAZALARQALASAPAAQAMAAAIgLQAIgLAAgRQAAgZgLgRQgLgSgOAAQgNAAgIALg");
	this.shape_5.setTransform(-17.2,17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AgRBeQgLgDgHgGIgIAFQgEACgEAAIgFgBIgEgCIAAgBQAEgGADgLQACgLAAgdIAAgeIAAgdIgBggQgCgIgDgCIgHgCQgIgCAAgEQAAgDADgCQADgDAJgDIAQgEIAMgDQAGABABACQACABAAAFIgBAHIgBAmIAAA5IABAiQAAATAGAGQAGAHAOAAQAQAAAJgNQAJgOAAgZQABgUgKgMQgJgNgPAAIgEABIgDAAQgJAAAAgJQAAgGAJgEQAJgDALAAQAYAAAPARQAPAQAAAcQAAAhgSAUQgTATgfABQgMAAgKgDg");
	this.shape_6.setTransform(-32.7,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("Ag/BAQgHgCAAgFQAAgFAHgCIADgCQAEgBABgFQABgEAAgKIAAgJIAAgKIAAgNQAAgUgBgHQgBgGgDgBIgGgCQgIgDAAgEQAAgDADgCQACgDAGgCIATgGIANgCQAEAAABACQACACAAAEIAAAJIAAABIABAAIABAAIAAAAIADgDIADgDQAOgNAQAAQAJAAAJAEQAIAEAGAHQAGAHADAKQACAKAAAVIAAARIAAAIIAAAIQAAAJACAEQABAEADABIADACQAHACAAAFQAAAFgGACQgGACgUAAQgSAAgHgCQgGgCAAgFQAAgFAHgCIAFgCQADgCABgFQABgGAAgOQAAgpgFgKQgGgLgNAAQgGAAgHAFQgGAEgDAHQgDAFgBAKIgBAjQAAANABAEQABAEACACIAFACQAHACAAAFQAAAFgGADQgHACgRAAQgUAAgGgDg");
	this.shape_7.setTransform(-47.5,17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("AgbBbQgHgCAAgFQAAgGAIgDIAGgDQADgCABgQIABg3IgBgxQgBgTgBgDIgJgEQgHgDAAgFQAAgFAGgCQAGgCAWAAQAYAAAFACQAGACAAAFQAAAGgIADIgGACQgCACgBANIgBArIAAA9QACAWABADQABACAHADQAHACAAAGQAAAFgHACQgHADgVAAQgTAAgIgDg");
	this.shape_8.setTransform(-59.3,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("AgnBAQgGgCAAgFQAAgFAGgCIAEgCQADgBABgFQACgEAAgKIgBgJIAAgKIAAgIQAAgXgBgHQgBgIgCgBIgHgCQgHgDAAgEQAAgDADgDQABgCAHgCIARgGIAMgCQAGAAACASIAAACIABABQAGgLAHgFQAIgGAHAAQAJAAAGAGQAFAFAAAJQAAAJgEAGQgFAFgGAAIgHgCIgGgDIgCgGQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgKAAgDANQgDAMAAAnQAAALABAGQACAFADACIAFACQAIACAAAFQAAAFgIACQgGADgSAAQgTAAgHgDg");
	this.shape_9.setTransform(46.2,-11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("AAcBCQgBgCAAgEIAAgJIAAgBIgBAAQgCgBgDAEIgBACQgHAGgIADQgGAEgKAAQgKgBgJgDQgIgEgGgHQgGgHgCgLQgDgKAAgbIAAgJIAAgJIAAgDQAAgLgCgDQgBgCgEgCIgGgCQgHgCAAgEQAAgEADgCQACgDAJgDIASgEIANgCQAEAAACACQACADgBAGIAAAFIgBAxQAAAZAGAKQAFALANgBQAOABAGgNQAHgNAAgfIAAgKQAAgLgBgDQgCgDgEgBIgGgCQgHgCAAgEQAAgEADgCQACgCAJgEIASgEIAOgCQAEAAABACQABADAAAGIAAAHIgCA1IABAWIAAAIQACAGAGACIADABQAHADAAAEQAAADgCACIgIAFIgTAGQgJACgFAAQgDAAgCgCg");
	this.shape_10.setTransform(33.1,-11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("AgvAxQgSgTAAgdQAAgdATgTQAUgUAcAAQAcAAASASQASATAAAcQAAAdgTAVQgTAUgcAAQgcAAgTgTgAgYgmQgIALAAARQAAAZALARQALASAPAAQAMAAAIgLQAIgLAAgRQAAgZgLgRQgLgSgOAAQgNAAgIALg");
	this.shape_11.setTransform(18.1,-11.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("AgaBcQgIgDAAgFQAAgFAIgEIAGgCQAEgEABg1IAAgMIgQgZIgYgmQgIgMgEgCIgHgDQgIgDAAgFQAAgFAGgCQAGgCAZAAQAaAAAGACQAGACAAAFQAAAFgKAEIgBAAIgEADIgBAEQAAADAFAJIAaApIAWgjQAHgMAAgDQAAgDgCgCQgCgDgGgCIgGgEQgCgCAAgDQAAgFAGgCQAFgCAVAAQAVAAAGACQAFACAAAFQAAAFgHADIgKAGQgFAEgNASQgMAUgTAfIAAAXQABArADAEIAGACQAIADAAAGQAAAFgHADQgHACgVAAQgTAAgHgCg");
	this.shape_12.setTransform(2.4,-14.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("AgVBdQgHgCAAgFQAAgEAGgDIAHgDQABgDABgHIABgaIAAgUIAAgYIAAgKQABghgCgJQgBgKgCgBIgIgDQgJgDAAgEQAAgDACgDQADgCAJgDIASgFIANgCQADAAACADQACACAAAGIAAAKQgCAvAAAuIABAsQABAKACACIAHAEQAGACAAAFQAAAFgGADQgHACgRAAQgTAAgGgDg");
	this.shape_13.setTransform(-17,-14.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("AgVBdQgHgCAAgFQAAgEAGgDIAHgDQACgDAAgHIABgaIAAgUIAAgYIAAgKQABghgCgJQgBgKgCgBIgIgDQgJgDAAgEQAAgDACgDQADgCAJgDIASgFIANgCQAEAAABADQACACAAAGIAAAKQgCAvAAAuIAAAsQACAKACACIAHAEQAGACAAAFQAAAFgGADQgHACgRAAQgTAAgGgDg");
	this.shape_14.setTransform(-24.3,-14.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AgWBdQgHgCAAgGQAAgEAHgDIADgBQAEgCABgEQABgFAAgKIAAgIIAAgLIAAgNQAAgVgBgFQgBgGgDgCIgGgCQgIgCAAgFQAAgDADgCQACgCAGgDIAUgGIAMgCQAEAAACACQABADAAAGIAAAHIAAAGIgBAhIAAAAIgBAgIABASQACAFACABIAFADQAHACAAAFQAAAFgGACQgHACgRAAQgTAAgGgCgAgPhBQgGgEAAgHQAAgIAHgFQAGgFAIAAQAIAAAGAFQAFAEAAAIQAAAHgGAFQgGAFgIAAQgJAAgFgFg");
	this.shape_15.setTransform(-31.5,-14.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("AhBBdQgHgCAAgGQgBgFAIgDQAGgCACgDQACgCABgTIABgzIgBgvQgBgVgCgCIgIgEQgIgDABgGQAAgFAFgBQAGgCAXAAIBPAAIANgCIAHgCIADABIACADQADAFADAIQABAJAAAHQAAAFgBAEQgCACgFAAQgEABgGgKIgDgFQgDgFgGgBQgGgCgJAAIgSAAIgSABQgGABgCADQgDADAAAJIgBAYIAAALQAAAGABABQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIAVAAQALAAADgDQAFgDABgIIAAgCQACgOAHAAQAGAAACAHQACAHAAAaQAAAXgCAHQgCAHgGAAQgHAAgCgOIAAgCQgBgIgFgDQgDgDgLAAIgUAAQgEAAgBADQgBACAAAIIAAAKIABAkQAAAIADACIAGACQAHAEABAFQgBAGgGACQgIADgUAAQgVAAgHgDg");
	this.shape_16.setTransform(-42.8,-14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fillyourinboxtall, new cjs.Rectangle(-65.7,-31.9,131.4,63.9), null);


(lib.fadebuttoncta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("AreCpIAAlRIW9AAIAAFRg");
	this.shape.setTransform(0,0,0.999,0.989);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fadebuttoncta, new cjs.Rectangle(-73.4,-16.6,146.9,33.3), null);


(lib.diytipswideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AgJBEIgOgDIgDADIgEAAIgEAAIgCgCQgEgEgEgKQgEgLAAgJQAAgEADgDQACgDADAAQAGAAAGALIAFAHQAEAGAHADQAGADAHAAQAJAAAFgFQAFgEAAgHQAAgLgVgLIgIgDQgUgLgHgHQgHgJAAgMQAAgRALgLQAMgKAUAAIAIAAIAJACIAGgDIAEAAQAGAAAGAKQAHAKgBALQAAAFgBADQgCACgFAAQgDAAgCgCQgDgDgEgGQgFgIgFgDQgFgDgIAAQgGAAgFAEQgFAEAAAHQABAGAEAEQAFAFAPAIIACABQAkARAAAVQAAASgOAMQgOAMgVAAg");
	this.shape.setTransform(46,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("Ag+BZQgHgCAAgGQAAgEAGgCIAGgEQADgCABgLQABgKAAggIAAgVQAAgjgBgKQgCgKgDgCIgGgCQgHgDAAgEQAAgDACgDIAIgEIASgGQAIgCAFAAQAEAAABACQACACAAAEIAAAHIAAACIABABIAFgDIAFgEQAIgGAGgDQAIgDAHAAQAZAAAPASQAPASAAAcQAAAegRAUQgRAUgbAAQgLAAgDgDQgFgDAAgFQAAgDACgCQACgCAEAAIADAAIAEABQAPAAAJgMQAIgMAAgUQAAgWgJgNQgKgOgOAAQgNAAgIAIQgIAHAAAUIAABSIABANQABAFABACQACACAGABIAFACIADACIABAEQAAAFgIACQgIACgSAAQgTAAgGgCg");
	this.shape_1.setTransform(32.3,5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AgWBdQgHgCAAgGQAAgEAHgDIADgBQAEgCABgEQABgFAAgKIAAgIIAAgLIAAgNQAAgVgBgFQgBgGgDgCIgGgCQgIgCAAgFQAAgDADgCQACgCAGgDIAUgGIAMgCQAEAAACACQABADAAAGIAAAHIAAAGIgBAhIAAAAIgBAgIABASQACAFACABIAFADQAHACAAAFQAAAFgGACQgHACgRAAQgTAAgGgCgAgPhBQgGgEAAgHQAAgIAHgFQAGgFAIAAQAIAAAGAFQAFAEAAAIQAAAHgGAFQgGAFgIAAQgJAAgFgFg");
	this.shape_2.setTransform(21.2,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AgaBdQgIgDAAgFQAAgFAHgEQAHgCACgCQABgCABgWIABg9IgBgiIgBgVQAAgDgDgBQgCgCgFAAIgGAAQgJAAgFADQgFACgDAFIgEAIIgEAJIgEAFIgFABQgEAAgBgDQgCgDAAgJQAAgRAEgLQAEgKAGAAIACAAQAKACAQAAIBLAAQAQAAALgCIABAAQAGAAAEAKQAEALAAARQAAAIgBAEQgCADgEAAIgFgBIgDgFIgEgJIgEgIQgEgFgFgCQgFgDgJAAIgGAAQgFAAgCACQgCABgBADIgBAVIAAAiIAAA9QABAWACACQABACAHACQAHAEAAAFQAAAFgHADQgIACgUAAQgTAAgHgCg");
	this.shape_3.setTransform(9.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AgaBcQgIgDAAgFQAAgFAIgEIAGgCQAEgEABg1IAAgMIgQgZIgYgnQgIgLgEgCIgHgDQgIgDAAgFQAAgFAGgCQAGgCAZAAQAaAAAGACQAGACAAAFQAAAGgKADIgBAAIgEADIgBAEQAAACAFAKIAaApIAWgjQAHgMAAgDQAAgDgCgCQgCgDgGgCIgGgEQgCgCAAgDQAAgFAGgCQAFgCAVAAQAVAAAGACQAFACAAAFQAAAFgHADIgKAGQgFAEgNASIgfAzIAAAXQABAsADADIAGACQAIADAAAGQAAAFgHADQgHACgVAAQgTAAgHgCg");
	this.shape_4.setTransform(-14.9,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AgbBcQgHgDAAgFQAAgFAIgEIAGgCQADgDABgPIABg4IgBgxQgBgTgBgCIgJgFQgHgDAAgFQAAgFAGgCQAGgCAWAAQAYAAAFACQAGABAAAGQAAAFgIADIgGADQgCACgBANIgBArIAAA9QACAXABACQABACAHACQAHAEAAAFQAAAFgHADQgHACgVAAQgTAAgIgCg");
	this.shape_5.setTransform(-27.4,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AgbBeIgQgBIgLABIgMAAQgQAAgFgCQgEgCgBgGQABgFAGgDQAIgCABgCQABgDABgTIACgyIgCgwQgBgUgBgDIgJgEQgGgDgBgFQAAgGAGgCQAFgCAQAAIAMAAIAMABIASgBIAPAAQAvAAAbAZQAbAZgBAtQAAAtgbAYQgbAXgzAAgAgchJQgFACgCAEQgCAFgBAPIgBAnIABAxQABAVACAEQABAEAJADQAIACAMAAQAeAAAOgSQAPgSAAgkQAAgmgRgUQgRgUggAAQgKAAgGACg");
	this.shape_6.setTransform(-41.6,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.diytipswideskyscraper, new cjs.Rectangle(-53.7,-17.4,107.5,35), null);


(lib.ctaboxgfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D53900").s().p("ArLCYIAAkvIWXAAIAAEvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.6,-15.2,143.2,30.4);


(lib.cookietwo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookietwo();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookietwo_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookietwelve_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookietwelve();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookietwelve_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookietrayone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieone();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookietrayone, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookiethree_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiethree();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiethree_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookiethirteen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiethirteen();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiethirteen_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookieten_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieten();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieten_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookiesixteen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiesixteen();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiesixteen_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookiesix_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiesix();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiesix_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookieseventeen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieseventeen();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieseventeen_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookieseven_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieseven();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieseven_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookienine_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookienine();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookienine_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookiegreens_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiegreens();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiegreens_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookiefrosting_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefrosting();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefrosting_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookiefourteen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefourteen();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefourteen_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookiefour_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefour();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefour_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookiefive_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefive();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefive_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookiefifteen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefifteen();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefifteen_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookieeleven_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieeleven();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieeleven_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookieeight_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieeight();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieeight_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.cookieberries_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieberries();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieberries_1, new cjs.Rectangle(-75.5,-102.5,151,205), null);


(lib.candle2mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.candletwotallbanner();
	this.instance.parent = this;
	this.instance.setTransform(-11,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.candle2mc, new cjs.Rectangle(-11,-28.5,22,57), null);


(lib.candle1mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.candleonetallbanner();
	this.instance.parent = this;
	this.instance.setTransform(-27,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.candle1mc, new cjs.Rectangle(-27,-26.5,54,53), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.blackrectanglefillinbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMfguaIY/AAMAAABc1I4/AAg");
	this.shape.setTransform(0,0,0.993,1.008);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-300.5,161,601);


(lib.fadecta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(12).call(this.frame_24).wait(2));

	// fade-button
	this.instance = new lib.fadebuttoncta();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},10).wait(2).to({alpha:0},10).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.wideskyscraperinboxsomethingdelicious = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_50 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		
		console.log("this frame works");
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.rollover_color.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.rollover_color.gotoAndPlay(13);
		}
	}
	this.frame_180 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(130).call(this.frame_180).wait(6));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(82.2,302,0.797,0.919,0,0,0,0.1,0.4);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(186));

	// black-rectangle
	this.instance = new lib.blackrectanglefillinbox("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(186));

	// fade-from-white
	this.instance_1 = new lib.blackwideskyscraper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.1,300);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(177));

	// logo
	this.instance_2 = new lib.logokale("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(80,37.1,0.003,0.003,0,0,0,0,17.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({startPosition:0},0).to({scaleX:0.29,scaleY:0.29,y:42.1,alpha:1},6,cjs.Ease.get(1)).to({scaleX:0.27,scaleY:0.27,y:41.7},7,cjs.Ease.get(1)).wait(164));

	// fill-your-inbox-with
	this.instance_3 = new lib.fillyourinboxtall();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80,204.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({alpha:1},10).wait(154));

	// diy-tips
	this.instance_4 = new lib.diytipswideskyscraper();
	this.instance_4.parent = this;
	this.instance_4.setTransform(80,248.6);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(106).to({alpha:1},10).wait(20).to({alpha:0},5).wait(45));

	// Party-Ready Recipes
	this.instance_5 = new lib.partyreadyrecipeswideskyscraper();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80,263.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36).to({alpha:1},10).wait(60).to({alpha:0},5).wait(75));

	// holiday-inspiration
	this.instance_6 = new lib.holidayinspirationwideskyscraper();
	this.instance_6.parent = this;
	this.instance_6.setTransform(80,262.4);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(136).to({alpha:1},10).wait(20).to({alpha:0},5).wait(15));

	// something-delicious
	this.instance_7 = new lib.somethingdelicioustall();
	this.instance_7.parent = this;
	this.instance_7.setTransform(80,263.1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(166).to({alpha:1},10).wait(10));

	// sign-up-mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ar/D9IAAn4IX/AAIAAH4g");
	mask.setTransform(80.8,332.3);

	// sign up for emails
	this.instance_8 = new lib.signupgfx("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(95.6,323.4);
	this.instance_8.alpha = 0;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({y:283.7},0).to({y:328.4,alpha:1},10,cjs.Ease.get(1)).to({y:323.4},11,cjs.Ease.get(1)).wait(115));

	// rollover-mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Arrb5IAAn5IX/AAIAAH5g");
	mask_1.setTransform(78.8,178.5);

	// rollover-color
	this.rollover_color = new lib.fadecta();
	this.rollover_color.parent = this;
	this.rollover_color.setTransform(80.1,323.7);

	var maskedShapeInstanceList = [this.rollover_color];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.rollover_color).wait(50).to({y:283.7,alpha:0},0).to({y:328.7,alpha:1},10,cjs.Ease.get(1)).to({y:323.7},11,cjs.Ease.get(1)).wait(115));

	// cta-mask-box (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AroEOIAAobIXRAAIAAIbg");
	var mask_2_graphics_50 = new cjs.Graphics().p("AroEOIAAobIXRAAIAAIbg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:80.6,y:333.6}).wait(50).to({graphics:mask_2_graphics_50,x:80.6,y:333.6}).wait(136));

	// cta-box
	this.instance_9 = new lib.ctaboxgfx();
	this.instance_9.parent = this;
	this.instance_9.setTransform(80.1,323.9,1.026,1.102,0,0,0,0.1,0.2);
	this.instance_9.alpha = 0;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50).to({y:283.9},0).to({y:328.9,alpha:1},10,cjs.Ease.get(1)).to({y:323.9},11,cjs.Ease.get(1)).wait(115));

	// top-glasses-right
	this.instance_10 = new lib.glassestopright();
	this.instance_10.parent = this;
	this.instance_10.setTransform(136.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(186));

	// candle-2
	this.instance_11 = new lib.candle2mc();
	this.instance_11.parent = this;
	this.instance_11.setTransform(11,372.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(186));

	// candle-1
	this.instance_12 = new lib.candle1mc();
	this.instance_12.parent = this;
	this.instance_12.setTransform(54,382.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(186));

	// cookie-greens
	this.instance_13 = new lib.cookiegreens_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(84.5,500.8);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(86).to({alpha:1},0).wait(100));

	// cookie-berries
	this.instance_14 = new lib.cookieberries_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(84.5,500.8);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(83).to({alpha:1},0).wait(103));

	// cookie-frosting
	this.instance_15 = new lib.cookiefrosting_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(84.5,500.8);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(76).to({alpha:1},0).wait(110));

	// cookie-seventeen
	this.instance_16 = new lib.cookieseventeen_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(84.5,500.8);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(69).to({alpha:1},0).wait(117));

	// cookie-sixteen
	this.instance_17 = new lib.cookiesixteen_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(84.5,500.8);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(65).to({alpha:1},0).wait(121));

	// cookie-fifteen
	this.instance_18 = new lib.cookiefifteen_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(84.5,500.8);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(61).to({alpha:1},0).wait(125));

	// cookie-fourteen
	this.instance_19 = new lib.cookiefourteen_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(84.5,500.8);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(57).to({alpha:1},0).wait(129));

	// cookie-thirteen
	this.instance_20 = new lib.cookiethirteen_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(84.5,500.8);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(53).to({alpha:1},0).wait(133));

	// cookie-twelve
	this.instance_21 = new lib.cookietwelve_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(84.5,500.8);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(49).to({alpha:1},0).wait(137));

	// cookie-eleven
	this.instance_22 = new lib.cookieeleven_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(84.5,500.8);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(45).to({alpha:1},0).wait(141));

	// cookie-tene
	this.instance_23 = new lib.cookieten_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(84.5,500.8);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(41).to({alpha:1},0).wait(145));

	// cookie-nine
	this.instance_24 = new lib.cookienine_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(84.5,500.8);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(37).to({alpha:1},0).wait(149));

	// cookie-eight
	this.instance_25 = new lib.cookieeight_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(84.5,500.8);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(33).to({alpha:1},0).wait(153));

	// cookie-seven
	this.instance_26 = new lib.cookieseven_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(84.5,500.8);
	this.instance_26.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(29).to({alpha:1},0).wait(157));

	// cookie-six
	this.instance_27 = new lib.cookiesix_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(84.5,500.8);
	this.instance_27.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(25).to({alpha:1},0).wait(161));

	// cookie-five
	this.instance_28 = new lib.cookiefive_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(84.5,500.8);
	this.instance_28.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(21).to({alpha:1},0).wait(165));

	// cookie-four
	this.instance_29 = new lib.cookiefour_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(84.5,500.8);
	this.instance_29.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(17).to({alpha:1},0).wait(169));

	// cookie-three
	this.instance_30 = new lib.cookiethree_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(84.5,500.8);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(13).to({alpha:1},0).wait(173));

	// cookie-two
	this.instance_31 = new lib.cookietwo_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(84.5,500.8);
	this.instance_31.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(9).to({alpha:1},10).wait(167));

	// cookie-one
	this.instance_32 = new lib.cookietrayone();
	this.instance_32.parent = this;
	this.instance_32.setTransform(84.5,500.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(186));

	// table-cloth
	this.instance_33 = new lib.tableclothtall_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(43,218);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(186));

	// table
	this.instance_34 = new lib.whitetable_1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(186));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79.5,299.5,164.8,603.8);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;