function Base (name) {
 var self = this;
 self.name = '';
 self.toString = toString;

 function toString() {
   return self.name;
 }
}

function Displayable () {
 var self = this;
 var display = true;

 self.hide = hide;
 self.show = show;
 Object.defineProperties(self, {
   hidden: {
     get: function getHidden() { return !display; },
   },
 });

 function hide() {
   display = false;
 }

 function show() {
   display = true;
 }
}

function Component(name) {
	var self = this;
	Base.apply(self, arguments);
	Displayable.apply(self, arguments);
}