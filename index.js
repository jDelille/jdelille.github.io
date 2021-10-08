anime({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });

  gsap.from('.testing', {
    scrollTrigger: {
        trigger: ".testing",   
        start: "top bottom",  
        scrub: 1
      },
      opacity: 0,
      x: -300,
  })

// ABOUT SECTION ANIMATIONS 
  gsap.from('.about', {
    scrollTrigger: {
        trigger: ".about",   
        start: "top bottom",  
        scrub: 1
      },
      opacity: 0,
      x: -300,
  })

  // gsap.from('.about-text', {
  //   scrollTrigger: {
  //       trigger: ".about-text",   
  //       start: "top bottom",  
  //       scrub: 1
  //     },
  //     opacity: .2,
  //     y: 100,
  // })


  gsap.from('.contact', {
    scrollTrigger: {
        trigger: ".contact",   
        start: "top bottom",  
        scrub: 1
      },
      opacity: 0,
      x: -300,
  })


  let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".skills-container",
      start: "top bottom",
    }
  });

  tl.addLabel("start")
  .from(".skill-box", {scale: 0.3, rotation:45, autoAlpha: 0, duration: 0.8, })


  gsap.from('.img-container', {
    scrollTrigger: {
        trigger: ".img-container",   
        start: "top bottom",
        end: "top bottom",  
        scrub: 1
      },
      opacity: .5,
      y: 100,
  })


  function sendMail(params) {
    let tempParams = {
      from_name: document.getElementById('fromName').value,
      to_name: document.getElementById('toName').value,
      message: document.getElementById('msg').value
    }
    emailjs.send('service_1m2m9yj','template_el9d4ug',tempParams )
      .then(function(res){
        console.log("success", res.status)
      })
  }