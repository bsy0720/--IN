$(function(){

  gsap.registerPlugin(ScrollTrigger);

  let green = $('.header .nav-item a');
  green.click(function(){
    $(this).addClass('on')
    green.not($(this)).removeClass("on");
    $('.header .nav-item a').attr('aria-selected',false)
    $(this).find('a').attr('aria-selected',true)
  })

  let playFlag = true;
  $(window).scroll(function(){
    curr = $(this).scrollTop();
    qnaPos = $('#sc-qna').offset().top;

    if(curr > 100){
      $('.header').addClass('on');
    } else{
      $('.header').removeClass('on');
    }
    if(curr > 600){
      $('.header .nav-list').addClass('on');
    } else{
      $('.header .nav-list').removeClass('on');
    }

    if((curr >= qnaPos) && playFlag){
      $('.sc-qna iframe').attr('src','https://tv.naver.com/embed/29460457?autoPlay=true')
      playFlag=false;
    }
  });



/**
 * @사이드메뉴
 */
  $('.header .btn-wrap .btn-nav').click(function(){
      $('.header .side-nav').toggleClass('open')
      $('.header .btn-wrap .btn-nav').toggleClass('on')
  });

  /**
   * @a태그누를때_화면_사라지기
   */
  $('.header .side-nav .side-item a').click(function(e){
    e.preventDefault();

    target=$(this).attr('href');
    targetPos=$(target).offset().top;

    $('.header .side-nav').removeClass('open');
    $('.header .btn-wrap .btn-nav').removeClass('on')

    window.scrollTo({top:targetPos,behavior:"smooth"})
  });


  $('.sc-qna .tab-wrap a').click(function(e){
    e.preventDefault();
    id=$(this).data('id');
    $(this).addClass('on').siblings().removeClass('on');
    $('.sc-qna iframe').attr('src',`https://tv.naver.com/embed/${id}?autoPlay=true`)
  })



  var issueSwiper = new Swiper(".sc-issue .issue-swiper", {
    slidesPerView: 'auto',
    spaceBetween: 28,
    loop: true,
    centeredSlides:true,
    watchSlidesProgress: true,
    touchRatio: 1,
    navigation: {
      nextEl: ".sc-issue .btn-next",
      prevEl: ".sc-issue .btn-prev",
    },
    breakPoints:{
      1024: {
        touchRatio: 0,
      }
    }
  });

  var expertSwiper = new Swiper(".sc-expert .expert-swiper", {
    slidesPerView: 'auto',
    spaceBetween: 28,
    loop: true,
    centeredSlides:true,
    watchSlidesProgress: true,
    touchRatio: 1,
    navigation: {
      nextEl: ".sc-expert .btn-next",
      prevEl: ".sc-expert .btn-prev",
    },
    breakPoints: {
      1024: {
        touchRatio: 0,
      }
    }
  });

  var infoSwiper = new Swiper(".sc-info .swiper", {
    slidesPerView: 2,
    spaceBetween: 48,
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {
      nextEl: ".sc-info .btn-next",
      prevEl: ".sc-info .btn-prev",
    },
  });





  /**
   * @숫자카운트
   */
  function numberCounter(target_frame, target_number) {
    this.count = 0; this.diff = 0;
    this.target_count = parseInt(target_number);
    this.target_frame = document.getElementById(target_frame);
    this.timer = null;
    this.counter();
};
numberCounter.prototype.counter = function() {
    var self = this;
    this.diff = this.target_count - this.count;
    if(this.diff > 0) {
        self.count += Math.ceil(this.diff / 5);
    }
    this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if(this.count < this.target_count) {
        this.timer = setTimeout(function() { self.counter(); }, 20);
    } else {
        clearTimeout(this.timer);
    }
};
 


  ScrollTrigger.create({
      trigger:".sc-donation",
      start:"0% 40%",
      end:"0 30%",
      onEnter:function(){
        new numberCounter("counter4", 4338644);
        new numberCounter("counter3", 258953);
        new numberCounter("counter2", 10);
        new numberCounter("counter1", 130000);
      }
  })







}) //지우지 않기