<template>
  <div id="home-wrapper" class="clearfix">
    <div class="content-wrapper">
      <item-bar v-for="(item, index) in compList" :key="index" :info="item" :index="index"></item-bar>
    </div>
  </div>
</template>

<script type="text/javascript">
import itemBar from './itemBar.vue'
export default {
  name: 'home',
  data () {
    return {
      compList: [{
        title: 'Common',
        childs: [{
          text: 'Button',
          routeName: 'button'
        },
        {
          text: 'Flex',
          routeName: 'flex'
        },
        {
          text: 'Switch',
          routeName: 'switch'
        },
        {
          text: 'Radio',
          routeName: 'radio'
        },
        {
          text: 'Loading',
          routeName: 'loading'
        },
        {
          text: 'Progress',
          routeName: 'progress'
        },
        {
          text: 'Search bar',
          routeName: 'search-bar'
        }]
      },
      {
        title: 'Navigation',
        childs: [
          {
            text: 'Header',
            routeName: 'header'
          },
          {
            text: 'Tabs',
            routeName: 'tabs'
          },
          {
            text: 'Drawer',
            routeName: 'drawer'
          }
        ]
      },
      {
        title: 'Popup',
        childs: [
          {
            text: 'Dialog',
            routeName: 'dialog'
          },
          {
            text: 'Popup',
            routeName: 'popup'
          },
          {
            text: 'Action Sheet',
            routeName: 'action-sheet'
          },
          {
            text: 'Toast',
            routeName: 'toast'
          },
          {
            text: 'Picker',
            routeName: 'picker'
          }
        ]
      }, {
        title: 'Gesture',
        childs: [
          {
            text: 'Carousel',
            routeName: 'carousel'
          },
          {
            text: 'Pull down',
            routeName: 'pull-down'
          },
          {
            text: 'Slide',
            routeName: 'slide'
          }
        ]
      }]
    }
  },
  components: {
    itemBar
  },
  mounted () {
    if (localStorage.showCtrl === void 0) {
      const ctrlArr = '0'.repeat(this.compList.length).split('').map(function (el, index) {
        return !!~~el
      })
      localStorage.showCtrl = JSON.stringify(ctrlArr)
    }
  }
}
</script>

<style lang="less" scoped>
#home-wrapper {
  .content-wrapper {
    margin: 20px;
  }
}
</style>
