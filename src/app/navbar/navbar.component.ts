import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// declare var $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // ---------Responsive-navbar-active-animation-----------
	
	function test() {
		var tabsNewAnim = $("#navbarSupportedContent");
		var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
		var activeItemNewAnim = tabsNewAnim.find(".active");
		var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
		var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
		var itemPosNewAnimTop = activeItemNewAnim.position();
		var itemPosNewAnimLeft = activeItemNewAnim.position();
		$(".hori-selector").css({
			top: itemPosNewAnimTop.top + "px",
			left: itemPosNewAnimLeft.left + "px",
			height: activeWidthNewAnimHeight + "px",
			width: activeWidthNewAnimWidth + "px"
		});

		$("#navbarSupportedContent").on("click", "li", function (e) {
			$("#navbarSupportedContent ul li").removeClass("active");
			$(this).addClass("active");
			var activeWidthNewAnimHeight = $(this).innerHeight();
			var activeWidthNewAnimWidth = $(this).innerWidth();
			var itemPosNewAnimTop = $(this).position();
			var itemPosNewAnimLeft = $(this).position();
			$(".hori-selector").css({
				top: itemPosNewAnimTop.top + "px",
				left: itemPosNewAnimLeft.left + "px",
				height: activeWidthNewAnimHeight + "px",
				width: activeWidthNewAnimWidth + "px"
			});
		});
	}

	$(document).ready(function(){
		setTimeout(function () {
			test();
		});
	});

	$(window).on("resize", function () {
		setTimeout(function () {
			test();
		}, 500);
	});

	$(".navbar-toggler").click(function () {
		$(".navbar-collapse").slideToggle(300);
		setTimeout(function () {
			test();
		});
	});

	$(".nav-item").click(function(){
		$(".navbar-collapse").slideToggle(300);
		setTimeout(function () {
			test();
		});
	});
	

	// --------------add active class-on another-page move----------
	// $(document).ready(function ($) {
	

	// 	var topMenu = $(".navbar"),
	// 	topMenuHeight = topMenu.outerHeight()+15,
	// 	// All list items
	// 	menuItems = topMenu.find("a"),
	// 	// Anchors corresponding to menu items
	// 	scrollItems = menuItems.map(function(){
	// 	var item = $($(this).attr("href"));
	// 	if (item.length) { return item; }
	// 	});

		// Bind to scroll
		// $(window).scroll(function(){
		// 	// Get container scroll position
		// 	var fromTop = $(this).scrollTop()+topMenuHeight;

		// 	// Get id of current scroll item
		// 	var cur = scrollItems.map(function(){
		// 		if ($(this).offset().top < fromTop)
		// 		return this;
		// 	});
		// 	// Get the id of the current element
		// 	cur = cur[cur.length-1];
		// 	var id = cur && cur.length ? cur[0].id : "";
			
		// 	// Set/remove active class
		// 	menuItems
		// 		.parent().removeClass("active")
		// 		.end().filter("[href='#"+id+"']").parent().addClass("active");
		// 		setTimeout(function () {
		// 			test();
		// 		});
		// });
		
	// });
  }
}
