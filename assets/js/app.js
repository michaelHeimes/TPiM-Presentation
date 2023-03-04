 //@prepros-prepend vendor/modernizr-3.12.0.min.js
 //@prepros-prepend vendor/gsap.min.js
  
 document.addEventListener('DOMContentLoaded', function () {
 
 	const bgCog = document.getElementById('Circle_Segments');
 	const homeCenterCircle = document.getElementById('Circle_Segments-2');
	const homeDividers = document.getElementById('Dividers-2');
	const homeHeader = document.getElementById('Group_10');
	const homePowerMeter = document.getElementById('Group_12');
	const homeTapText = document.getElementById('Group_11');
	const outerCircle = document.getElementById('Center_Circle-2');
	const outerCircleShadow = document.getElementById('Shadow-2');
	const cog = document.getElementById('Circle_Segments-4');
	const cogShadow = document.getElementById('Shadow-3');
	const centerCircle = document.getElementById('Center_Circle-4');
	const centerCircleShadow = document.getElementById('Shadow-4');
	const centerCircleText = document.getElementById('Group_94');
	const circleScale = .7;
	
	
	const navtext = document.querySelectorAll('.nav-text');
	
	const appAnalysis = document.getElementById('Group_101');
	const appAnalysisLink = document.getElementById('application-analysys-link');
	const appAnalysisCog = document.getElementById('application-analysys-cog');	
	
	console.log(appAnalysisCog);
	
	const batteryTechnologies = document.getElementById('batteryTechnologies');
	const serviceSupport = document.getElementById('service-support');
	const equipmentAccessories = document.getElementById('equipment-accessories');
	const batteryMonitoring = document.getElementById('Group_91');
	const chargingSolutions = document.getElementById('charging-solutions');
	
	// Animation Starting Points
		gsap.set(bgCog, {transformOrigin:"53.5% 46.5%", rotation:"+=90"});
		
		gsap.set(cog, {transformOrigin:"50% 50%", rotation:"-=135"});
		gsap.set(cogShadow, {transformOrigin:"53.3% 46.7%", rotation:"-=135"});

		gsap.set(homeDividers, {autoAlpha: 0});
		gsap.set(homeHeader, {autoAlpha: 0});
    	gsap.set(homePowerMeter, {autoAlpha: 0});
		gsap.set(homeTapText, {autoAlpha: 0});
		//gsap.set(centerCircle, {autoAlpha: 0});
		gsap.set(homeTapText, {autoAlpha: 0});
		gsap.set(centerCircleShadow, {transformOrigin:"50% 50%", xPercent:2, yPercent:-2, scaleY: .5, scaleX: .5});
		gsap.set([centerCircle, centerCircleText], {transformOrigin:"50% 50%", scaleY: circleScale, scaleX: circleScale});
		gsap.set(centerCircleText, {autoAlpha: 0});
		
		//gsap.set(navtext, {autoAlpha: 0});
		
		gsap.set(appAnalysis, {transformOrigin:"50% 50%", xPercent:0, yPercent:150});
		
		gsap.set(batteryTechnologies, {transformOrigin:"50% 50%", xPercent:-110, yPercent:100});

		gsap.set(serviceSupport, {transformOrigin:"50% 50%", xPercent:110, yPercent:100});		

		gsap.set(equipmentAccessories, {transformOrigin:"50% 50%", xPercent:115, yPercent:-55});	
		
		gsap.set(batteryMonitoring, {transformOrigin:"50% 50%", xPercent:0, yPercent:-130});
		
		gsap.set(chargingSolutions, {transformOrigin:"50% 50%", xPercent:-100, yPercent:-100});
		
		// gsap.to([centerCircle, centerCircleShadow, centerCircleText], {transformOrigin:"50% 50%", scaleY: 1, scaleX: 1});
		
		// gsap.to(centerCircle, {transformOrigin:"50% 50%", scaleY: 1, scaleX: 1});
		
		
		
		// Show nav text and icons
		//gsap.to([appAnalysis, batteryTechnologies, serviceSupport, equipmentAccessories, batteryMonitoring, chargingSolutions], 1.5, {transformOrigin:"50% 50%", xPercent:0, yPercent:0, ease: "expo.out"})

				
 	//gsap.to(centerCircle, 1, {y: 100});
	 
	const openingAnimation = gsap.timeline({delay: 1});
	openingAnimation.to(bgCog, {rotation: 0, duration: 1.5});
	openingAnimation.to([cog, cogShadow], {rotation: 0, duration: 1.75}, "<");
	openingAnimation.to([appAnalysis, batteryTechnologies, serviceSupport, equipmentAccessories, batteryMonitoring, chargingSolutions], 1.5, {transformOrigin:"50% 50%", xPercent:0, yPercent:0, ease: "expo.out"}, "-=.15");
	
	
	// appAnalysisLink.addEventListener("click", function () {
	// 	console.log("loaded");
	// 	gsap.to(appAnalysisCog, .3, {fill: '#d8002e'};
	// })
	
	appAnalysisLink.addEventListener("click", (event) => {
		gsap.to(appAnalysisCog, .3, {fill: '#d8002e'});
	});
	

 
 }, false);