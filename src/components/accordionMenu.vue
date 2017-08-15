<template>
  <div class="faq-container">
    <div class="faq-question" v-on:click="toggle(0)">
      <div class="faq-description"><span class="faq-number">1</span>{{description}}<span>+</span></div>
      <div class="faq-content" style="display: none;">
        <p>{{content}}</p>
      </div>
    </div>
    <div class="faq-question" v-on:click="toggle(1)">
      <div class="faq-description"><span class="faq-number">2</span>What is chocolate?<span>+</span></div>
      <div class="faq-content" style="display: none;">
        <p>Chocolate most commonly comes in dark, milk, and white varieties, with cocoa solids contributing to the brown color.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-accordion-menu',
  props: {
    description: {
      type: String,
      default: '什麼是維大力？',
    },
    content: {
      type: String,
      default: 'I do not know, dude.',
    },
  },
  methods: {
    toggle: function (num) {
      // console.log(this)
      // console.log(this.$el)
      // console.log(this.$el.children)
      // 設定參數作為指定 children 的區別
      if (this.$el.children[num].classList.contains('open')) {
        // console.log("if")
        this.$el.children[num].classList.remove('open')
        this.$el.children[num].querySelectorAll('.faq-content')[0].style.display = 'none'
      } else {
        // console.log("else")
        var prevFaqQuestion = this.$el.querySelectorAll('.open')
        if (prevFaqQuestion.length !== 0) {
          prevFaqQuestion[0].classList.remove('open')
          prevFaqQuestion[0].querySelectorAll('.faq-content')[0].style.display = 'none'
        }
        this.$el.children[num].classList.add('open')
        this.$el.children[num].querySelectorAll('.faq-content')[0].style.display = ''
      }
    },
  },
}
</script>

<style scoped>
.faq-container {
  width: 600px;
  margin: 0 auto;
}

.faq-question {
  padding: 0px;
  transition: all 0.3s;
}

.faq-content {
  padding: 20px 40px;
}

.faq-description {
  font-size: 24px;
  color: #4a4a4a;
  letter-spacing: -1.03px;
  padding: 23px 100px 20px 40px;
  border-top: 1px solid #d1d3d4;
  position: relative;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.faq-description span:last-child {
  cursor: pointer;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  position: absolute;
  right: 20px;
  top: 0px;
  color: #979797;
  font-size: 2em;
}

.faq-description .faq-number {
  width: 30px;
  height: 30px;
  line-height: 28px;
  border: 1px solid black;
  padding-right: 1px;
  display: inline-block;
  text-align: center;
  border-radius: 100px;
  -webkit-border-radius: 100px;
  margin-right: 10px;
  font-size: 20px;
  color: #4a4a4a;
  letter-spacing: -0.86px;
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 5px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  font-weight: normal;
}

.faq-question.open {
  background: #f7f7f7;
}

.faq-question.open .faq-description {
  font-weight: 600;
}

.faq-question.open .faq-description .faq-number {
  color: white;
  background: #4a4a4a;
}

.faq-question.open .faq-description span:last-child {
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  font-weight: normal;
}

@media (max-width: 767px) {
  .faq-container {
    width: 100%;
    border-radius: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid #D9D9D9;
    padding: 0;
  }

  .content-title {
    font-size: 28px;
    text-align: center;
    font-weight: 600;
  }

  .faq-description {
    font-size: 18px;
  }

  .faq-question .faq-description span:last-child {
    top: 8px;
  }
}
</style>
