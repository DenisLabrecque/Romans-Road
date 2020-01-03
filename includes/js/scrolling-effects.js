// This script allows adding an animation class to an HTML element. The class describes when the top, middle,
// or bottom of an element goes across the top, middle, or bottom of the window. Once that happens, the
// ANIMATION_CLASS is added to (or removed from) the element that crossed the screen. The animation must then
// be handled in CSS.
//
// Denis Labrecque
// September 2019

// The classes to use to animate an object. The first vertical alignment is the one used by the screen; the
// second vertical alignment is the one used for the element: "middle-top" means that the ANIMATION_CLASS gets
// added when the middle of the screen goes past the top of an element.
let TOP_TOP       = ".anim-top-top";
let TOP_MIDDLE    = ".anim-top-middle";
let TOP_BOTTOM    = ".anim-top-bottom";
let MIDDLE_TOP    = ".anim-middle-top";
let MIDDLE_MIDDLE = ".anim-middle-middle";
let MIDDLE_BOTTOM = ".anim-middle-bottom";
let BOTTOM_TOP    = ".anim-bottom-top";
let BOTTOM_MIDDLE = ".anim-bottom-middle";
let BOTTOM_BOTTOM = ".anim-bottom-bottom";

// The class that gets added after the animation gets hit
let ANIMATION_CLASS = "animated";

// Detect window scrolls and find how the height of elements compare in relation to the screen's scroll position
$(window).scroll(function () {

   let screenTop = $(window).scrollTop();
   let screenMiddle = $(window).scrollTop() + $(window).height() * 0.5;
   let screenBottom = $(window).scrollTop() + $(window).height();

   $(TOP_TOP).each(function (e) {
      let elementTop = $(this).offset().top;
      animateElement(this, screenTop, elementTop);
   });

   $(TOP_MIDDLE).each(function (e) {
      let elementMiddle = $(this).offset().top + $(this).outerHeight() * 0.5;
      animateElement(this, screenTop, elementMiddle);
   });

   $(TOP_BOTTOM).each(function (e) {
      let elementBottom = $(this).offset().top + $(this).outerHeight();
      animateElement(this, screenTop, elementBottom);
   });

   $(MIDDLE_TOP).each(function (e) {
      let elementTop = $(this).offset().top;
      animateElement(this, screenMiddle, elementTop);
   });

   $(MIDDLE_MIDDLE).each(function (e) {
      let elementMiddle = $(this).offset().top + $(this).outerHeight() * 0.5;
      animateElement(this, screenMiddle, elementMiddle);
   });

   $(MIDDLE_BOTTOM).each(function (e) {
      let elementBottom = $(this).offset().top + $(this).outerHeight();
      animateElement(this, screenMiddle, elementBottom);
   });

   $(BOTTOM_TOP).each(function (e) {
      let elementTop = $(this).offset().top;
      animateElement(this, screenBottom, elementTop);
   });

   $(BOTTOM_MIDDLE).each(function (e) {
      let elementMiddle = $(this).offset().top + $(this).outerHeight() * 0.5;
      animateElement(this, screenBottom, elementMiddle);
   });

   $(BOTTOM_BOTTOM).each(function (e) {
      let elementBottom = $(this).offset().top + $(this).outerHeight();
      animateElement(this, screenBottom, elementBottom);
   });
});

// Compare window and element height from top to add or remove the animation class
function animateElement(element, windowHeight, elementHeight) {
   if (windowHeight > elementHeight) {
      $(element).addClass(ANIMATION_CLASS);
   }
   else {
      $(element).removeClass(ANIMATION_CLASS);
   }
}