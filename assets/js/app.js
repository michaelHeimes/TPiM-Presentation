 //@prepros-prepend vendor/modernizr-3.12.0.min.js
 //@prepros-prepend vendor/gsap.min.js
  
 document.addEventListener('DOMContentLoaded', function () {
	
	const screensaver = document.getElementById('screensaver');
	const backPageConstant = document.getElementById('back-page-constant');
  	const backPage = document.querySelectorAll('section:not(#home):not(#screensaver)');
	const backHome = document.querySelectorAll('section:not(.home) button');
	 
	const page1 = document.getElementById('page-1');
	const page2 = document.getElementById('page-2');
	const page3 = document.getElementById('page-3');
	const page4 = document.getElementById('page-4');
	const page5 = document.getElementById('page-5');
	const page6 = document.getElementById('page-6');
 
 	// Home Page
 	const bgCog = document.getElementById('Circle_Segments');
 	const homeCenterCircle = document.getElementById('Circle_Segments-2');
	const homeDividers = document.querySelectorAll('#Dividers-2 image');
	const homeHeader = document.getElementById('home-header');

	const homePowerMeter = document.getElementById('#home_powermeter');	
	const homePowerMeterBars = document.querySelectorAll('#home_powermeter rect');
	const homePowerMeter1 = document.getElementById('home_powermeterRectangle_8');
	const homePowerMeter2 = document.getElementById('home_powermeterRectangle_9');
	const homePowerMeter3 = document.getElementById('home_powermeterRectangle_10');
	const homePowerMeter4 = document.getElementById('home_powermeterRectangle_11');
	const homePowerMeter5 = document.getElementById('home_powermeterRectangle_12');	
	
	const homeTapText = document.getElementById('home-tap-text');
	const outerCircle = document.getElementById('Center_Circle-2');
	const outerCircleShadow = document.getElementById('cc-Shadow-2');
	const cog = document.getElementById('Circle_Segments-4');
	const colorCog = document.querySelectorAll('.color-cog');
	const cogShadow = document.getElementById('cc-Shadow-3');
	const centerCircle = document.getElementById('Center_Circle-4');
	const centerCircleShadow = document.getElementById('cc-Shadow-4');
	const centerCircleText = document.getElementById('center-circle-text');
	const circleScale = .7;
	const homeLogo = document.getElementById('home-logo');
	const sidebarNav = document.getElementById('sidebar-nav');	
	
	const navtext = document.querySelectorAll('.nav-text');
		
	const pageLinks = document.querySelectorAll('#click-groups > g');
	
	const appAnalysis = document.getElementById('app-analysis');	
	const batteryTechnologies = document.getElementById('batteryTechnologies');
	const serviceSupport = document.getElementById('service-support');
	const equipmentAccessories = document.getElementById('equipment-accessories');
	const batteryMonitoring = document.getElementById('battery-monitoring');
	const chargingSolutions = document.getElementById('charging-solutions');
	
	// Back Page Constant
	const sbLinkHome = document.querySelectorAll('.home-trigger');
	const screensaverTrigger = document.querySelectorAll('.screensaver-trigger');
	const sidebarBp = document.getElementById('sidebar-bp');

	
	// Animation Starting Points
	gsap.set([backPage, homeLogo, centerCircleText, homeDividers, homePowerMeterBars], {autoAlpha: 0});

	gsap.set(bgCog, {transformOrigin:"53.5% 46.5%", rotation:"+=90"});
	
	gsap.set(cog, {transformOrigin:"50% 50%", autoAlpha: .1, rotation:"-=135"});
	gsap.set(cogShadow, {transformOrigin:"53.3% 46.7%", autoAlpha: .1, rotation:"-=135"});

	gsap.set([homeHeader, homeTapText], {autoAlpha: 0, y: '-5vw'});
	gsap.set(centerCircleShadow, {transformOrigin:"50% 50%", autoAlpha: 0, xPercent:2, yPercent:-2, scaleY: .5, scaleX: .5});
	gsap.set(centerCircle, {transformOrigin:"50% 50%", autoAlpha: .1, scaleY: circleScale, scaleX: circleScale});
	gsap.set(centerCircleText, {transformOrigin:"50% 50%", scaleY: circleScale, scaleX: circleScale});
	gsap.set(sidebarNav, {autoAlpha: 0, x: '3vw'});
	gsap.set(sidebarBp, {autoAlpha: 0, x: '3vw'});

	
	//gsap.set(navtext, {autoAlpha: 0});
	
	gsap.set([appAnalysis, batteryTechnologies, serviceSupport, equipmentAccessories, batteryMonitoring, chargingSolutions], { autoAlpha: 0});
	gsap.set(appAnalysis, {transformOrigin:"50% 50%", xPercent:0, yPercent:150});
	gsap.set(batteryTechnologies, {transformOrigin:"50% 50%", xPercent:-110, yPercent:100});
	gsap.set(serviceSupport, {transformOrigin:"50% 50%", xPercent:110, yPercent:100});		
	gsap.set(equipmentAccessories, {transformOrigin:"50% 50%", xPercent:115, yPercent:-55});	
	gsap.set(batteryMonitoring, {transformOrigin:"50% 50%", xPercent:0, yPercent:-130});
	gsap.set(chargingSolutions, {transformOrigin:"50% 50%", xPercent:-100, yPercent:-100});

	// Initial Opening Animation
	const openingAnimation = gsap.timeline();
	const animDuration = .7;
	openingAnimation.to(bgCog, {rotation: 0, duration: 1.5});
	openingAnimation.to([cog, cogShadow], {rotation: 0, duration: 1.75}, "<");
	openingAnimation.to([cog, cogShadow], {autoAlpha: 1, rotation: 0, duration: 1.75}, "<");
	openingAnimation.to([appAnalysis, batteryTechnologies, serviceSupport, equipmentAccessories, batteryMonitoring, chargingSolutions], 1.5, {transformOrigin:"50% 50%", xPercent:0, yPercent:0, autoAlpha: 1, ease: "expo.out"}, "-=.15");
	openingAnimation.to([centerCircle, centerCircleText], {autoAlpha: 1, scaleY: 1, scaleX: 1, duration: animDuration, ease: "expo.out"}, "<");
	openingAnimation.to(centerCircleShadow, {xPercent: 0, yPercent: 0, scaleY: 1, scaleX: 1, autoAlpha: 1, duration: animDuration}, "<");
	openingAnimation.to(homeDividers, {autoAlpha: 1, duration: animDuration}, ">+=.2");
	
	openingAnimation.to(homeHeader, {autoAlpha: 1, y: 0, duration: animDuration}, ">-.8");
	openingAnimation.to(homeLogo, {autoAlpha: 1, duration: animDuration}, "<");
	openingAnimation.to(sidebarNav, {autoAlpha: 1, x: '0', duration: animDuration}, "<");
	openingAnimation.to(homeTapText, {autoAlpha: 1, y: 0, duration: animDuration}, ">-.2");
	
	openingAnimation.pause();
	
	const powerMeterAnimation = gsap.timeline({repeat: -1, repeatDelay: 1.25});
	powerMeterAnimation.to(homePowerMeter1, {autoAlpha: .2, duration: .2});
	powerMeterAnimation.to(homePowerMeter2, {autoAlpha: .4, duration: .2}, "-=.1");
	powerMeterAnimation.to(homePowerMeter3, {autoAlpha: .6, duration: .2}, "-=.1");
	powerMeterAnimation.to(homePowerMeter4, {autoAlpha: .8, duration: .2}, "-=.1");
	powerMeterAnimation.to(homePowerMeter5, {autoAlpha: 1, duration: .2}, "-=.1");

	powerMeterAnimation.pause();
	
	
	// Abbreviated reverse animation
	const closeOpening = gsap.timeline();
	const closeSpeed = 1;
	closeOpening.to(cog, {transformOrigin:"50% 50%", autoAlpha: .1, rotation:"-=135", duration: closeSpeed});
	closeOpening.to(cogShadow, {transformOrigin:"53.3% 46.7%", autoAlpha: .1, rotation:"-=135", duration: closeSpeed}, "<");
	
	closeOpening.to(centerCircleText, {autoAlpha: 0, duration: closeSpeed}, "<-=.2");
	closeOpening.to([homeDividers, homePowerMeterBars], {autoAlpha: 0, duration: closeSpeed}, "<");
	closeOpening.to([homeHeader, homeTapText], {autoAlpha: 0, y: '-5vw', duration: closeSpeed}, "<");
	closeOpening.to(centerCircleShadow, {transformOrigin:"50% 50%", autoAlpha: 0, xPercent:2, yPercent:-2, scaleY: .5, scaleX: .5, duration: .1}, "<");
	closeOpening.to(centerCircle, {transformOrigin:"50% 50%", autoAlpha: .1, scaleY: circleScale, scaleX: circleScale, duration: closeSpeed}, "<");
	closeOpening.to(centerCircleText, {transformOrigin:"50% 50%", autoAlpha: 0, scaleY: circleScale, scaleX: circleScale, duration: closeSpeed}, "<");
	closeOpening.to(homeLogo, {autoAlpha: 0, duration: closeSpeed}, "<");
	closeOpening.to(sidebarNav, {autoAlpha: 0, x: '3vw', duration: closeSpeed}, "<");
	
	closeOpening.to(appAnalysis, {transformOrigin:"50% 50%", xPercent:0, yPercent:150, duration: closeSpeed}, "<");
	closeOpening.to(batteryTechnologies, {transformOrigin:"50% 50%", xPercent:-110, yPercent:100, duration: closeSpeed}, "<");
	closeOpening.to(serviceSupport, {transformOrigin:"50% 50%", xPercent:110, yPercent:100, duration: closeSpeed}, "<");		
	closeOpening.to(equipmentAccessories, {transformOrigin:"50% 50%", xPercent:115, yPercent:-55, duration: closeSpeed}, "<");	
	closeOpening.to(batteryMonitoring, {transformOrigin:"50% 50%", xPercent:0, yPercent:-130, duration: closeSpeed}, "<");
	closeOpening.to(chargingSolutions, {transformOrigin:"50% 50%", xPercent:-100, yPercent:-100, duration: closeSpeed}, "<");
	closeOpening.to([appAnalysis, batteryTechnologies, serviceSupport, equipmentAccessories, batteryMonitoring, chargingSolutions], { autoAlpha: 0}, "<-=.1");

	closeOpening.pause();
	
	
	// Hide the Screesaver and Play Initial Opening Animation 
	screensaver.addEventListener("click", (event) => {
		gsap.to(screensaver, {autoAlpha: 0, duration: .5});
		
		setTimeout(function() {
			openingAnimation.timeScale(1).play();
		}, 400);	
		setTimeout(function() {
			powerMeterAnimation.timeScale(1).play();
		}, 3200);
	});	 
	
	
	// Show the screensaver after inactivity and prepare the full Intitial Opening Animation
	const showScreensaver = function() {
		closeOpening.play();
			setTimeout(function() {
				gsap.to(screensaver, {autoAlpha: 1, duration: .5});	
			}, 1000);
			setTimeout(function() {
				openingAnimation.pause();
				openingAnimation.timeScale(10).reverse();
				powerMeterAnimation.pause();
				gsap.to([homePowerMeter1, homePowerMeter2, homePowerMeter3, homePowerMeter4, homePowerMeter5], {autoAlpha: 0});
				powerMeterAnimation.timeScale(10).reverse();
			}, 1500);
	}
	
	let initial=setTimeout(showScreensaver,300000);
	
	document.addEventListener("click", (event) => {
		clearTimeout( initial );
		initial=setTimeout(showScreensaver,300000); 
	});
	
	// Click Activate Screensaver
	screensaverTrigger.forEach(function (screensaverTriggerLink, index) {
		screensaverTriggerLink.addEventListener("click", (event) => {
			showScreensaver();
			gsap.to(backPage, {autoAlpha: 0, duration: .5, delay: .75});
		});	
	});

	// appAnalysisLink.addEventListener("click", (event) => {
	// 	gsap.to(appAnalysisCog, .3, {fill: '#d8002e'});
	// });
	
	// Navigation to Back Pages
	pageLinks.forEach(function (pageLink, index) {
		pageLink.addEventListener("click", (event) => {
						
			let activeCog = document.querySelector("[data-cog='" +  pageLink.dataset.page + "']");
			let activeConstantCog = document.querySelector("[data-constant-cog='" +  pageLink.dataset.page + "']");
			
			activeCog.classList.add('clicked');
			activeConstantCog.classList.add('clicked');
			
			gsap.to(homePowerMeterBars, {autoAlpha: 0, duration: .2});

			setTimeout(function() {
				powerMeterAnimation.pause();
				closeOpening.play();

				gsap.to(backPageConstant, {autoAlpha: 1, delay: .75, duration: .25});
				gsap.to('#' + pageLink.dataset.page, {autoAlpha: 1, delay: 1.2, duration: .75});
				gsap.to(sidebarBp, {autoAlpha: 1, x: 0, duration: 1, delay: 1.5});
				
			}, 700);
	
			setTimeout(function() {
				powerMeterAnimation.pause();
				setTimeout(function() {
					//powerMeterAnimation.reset();
				}, 500);
			}, 1500);
			
		});
	});
	
	
	// Return to Home Page
	const returnHome = function() {
		const colorCogs = document.querySelectorAll('.color-cog');
		
		gsap.to(sidebarBp, {autoAlpha: 0, x: '3vw', duration: 1});
		gsap.to(backPage, {autoAlpha: 0, duration: .5, delay: .5});
		
		colorCogs.forEach(function (colorCog, index) {
			colorCog.classList.remove('clicked');
		});	
		
		setTimeout(function() {
			closeOpening.reverse();
		}, 400);
		
		gsap.to(homePowerMeterBars, {autoAlpha: 0, duration: 0});
		
		setTimeout(function() {
			powerMeterAnimation.timeScale(1).play();
		}, 1500);
	}
	
	sbLinkHome.forEach(function (backHomeLink, index) {
		backHomeLink.addEventListener("click", (event) => {
			returnHome();
		});
	});
	
	// Page Drawer Triggers
	const drawerLinks = document.querySelectorAll('.drawer-links');
	const closeDrawer = document.getElementById('close-drawer');
	const drawerWrap = document.getElementById('drawer-wrap');
	const drawerInners = document.querySelectorAll('.drawer-wrap .inner');
	
	const p2d1 = document.getElementById('p2-d1');
	const p2d2 = document.getElementById('p2-d2');
	const p2d3 = document.getElementById('p2-d3');
	
	const p2d1Trigger = document.getElementById('p2-d1-trigger');
	const p2d2Trigger = document.getElementById('p2-d2-trigger');
	const p2d3Trigger = document.getElementById('p2-d3-trigger');

	const p3d1 = document.getElementById('p3-d1');
	const p3d2 = document.getElementById('p3-d2');
	const p3d3 = document.getElementById('p3-d3');
	const p3d4 = document.getElementById('p3-d4');
	
	const p3d1Trigger = document.getElementById('p3-d1-trigger');
	const p3d2Trigger = document.getElementById('p3-d2-trigger');
	const p3d3Trigger = document.getElementById('p3-d3-trigger');
	const p3d4Trigger = document.getElementById('p3-d4-trigger');
	
	const closerDrawer = function() {
		gsap.to(drawerWrap, {x: '-100%', ease: "power1.in", duration: 1});
		gsap.set(drawerInners, {autoAlpha: 0, duration: 0, delay: 1.1});		
	}

	gsap.set(drawerWrap, {x: "-100%"});
	gsap.set(drawerInners, {autoAlpha: 0});

	drawerLinks.forEach(function (drawerLink, index) {
		drawerLink.addEventListener("click", (event) => {
			gsap.to(drawerWrap, {x: 0, ease: "circ.out", duration: 1});
		});
	});
	
	closeDrawer.addEventListener("click", (event) => {
		closerDrawer();
	});
	
	p2d1Trigger.addEventListener("click", (event) => {
		gsap.to(p2d1, {autoAlpha: 1, duration: 0});
	});
	p2d2Trigger.addEventListener("click", (event) => {
		gsap.to(p2d2, {autoAlpha: 1, duration: 0});
	});
	p2d3Trigger.addEventListener("click", (event) => {
		gsap.to(p2d3, {autoAlpha: 1, duration: 0});
	});

	p3d1Trigger.addEventListener("click", (event) => {
		console.log("loaded");
		gsap.to(p3d1, {autoAlpha: 1, duration: 0});
	});
	p3d2Trigger.addEventListener("click", (event) => {
		gsap.to(p3d2, {autoAlpha: 1, duration: 0});
	});
	p3d3Trigger.addEventListener("click", (event) => {
		gsap.to(p3d3, {autoAlpha: 1, duration: 0});
	});	
	p3d4Trigger.addEventListener("click", (event) => {
		gsap.to(p3d4, {autoAlpha: 1, duration: 0});
	});	

	// Modals
	const modalMask = document.getElementById('modal-mask');
	const modalInner = document.querySelectorAll('#modal-mask .inner');
	const modalTriggers = document.querySelectorAll('.modal-trigger');
	const closemodals = document.querySelectorAll('.close-modal');

	const atModal = document.getElementById('at-modal');
	const atTriggers = document.querySelectorAll('.at-package-trigger');
	
	gsap.set(modalMask, {autoAlpha: 0});
	gsap.set(modalInner, {autoAlpha: 0, y: '10vw'});
	
	modalTriggers.forEach(function (modalTrigger, index) {
		modalTrigger.addEventListener("click", (event) => {
			gsap.to(modalMask, {autoAlpha: 1, duration: .5});
		});
	});

	closemodals.forEach(function (closemodal, index) {
		closemodal.addEventListener("click", (event) => {
			gsap.to(modalInner, {autoAlpha: 0, y: '10vw', duration: .5});
			gsap.to(modalMask, {autoAlpha: 0, duration: .4, delay: .2});
		});
	});
	
	atTriggers.forEach(function (atTrigger, index) {
		atTrigger.addEventListener("click", (event) => {
			gsap.to(atModal, {autoAlpha: 1, y: 0, duration: .5, delay: .3, ease: "circ.out"});
		});
	});
 
 }, false);