<template>
    <f7-page>
        <!-- Top Navbar-->
        <f7-navbar>
          <f7-nav-left>
            <f7-link panel-open="left">
              <f7-icon if-ios="ion:ios-menu" if-md="ion:md-menu"></f7-icon>
            </f7-link>
          </f7-nav-left>
          <f7-nav-title>Home</f7-nav-title>
        </f7-navbar>
        <f7-messagebar
            ref='messagebar'
            placeholder='Message'
            @change='onChange'
            resizable
            :value='chatText'
            @send='submitChat'
            send-link='Send'
        />
        <f7-messages ref="messages">
            <f7-messages-title><b>Sunday, Feb 9,</b> 12:58</f7-messages-title>
            <f7-message
                v-for="(message, index) in messagesData"
                :key="index"
                :type="message.type"
                :text="message.text"
                :image="message.image"
                :name="message.name"
                :avatar="message.avatar"
                :first="isFirstMessage(message, index)"
                :last="isLastMessage(message, index)"
                :tail="isTailMessage(message, index)"
            />
            </f7-messages>
      </f7-page>
</template>

<script>
import {
  f7Page,
  f7Navbar,
  f7NavLeft,
  f7Link,
  f7Icon,
  f7NavTitle,
  f7Block,
  f7Messages,
  f7MessagesTitle,
  f7Message
} from 'framework7-vue'

export default {
  components: {
    f7Page,
    f7Navbar,
    f7NavLeft,
    f7Link,
    f7Icon,
    f7NavTitle,
    f7Block,
    f7Messages,
    f7MessagesTitle,
    f7Message
  },
  data () {
    return {
      chatText: '',
      messagesData: [{
        type: 'sent',
        text: 'Hi, Kate'
      }, {
        type: 'sent',
        text: 'How are you?'
      }, {
        name: 'Kate',
        type: 'received',
        text: 'Hi, I am good!',
        avatar: 'http://lorempixel.com/100/100/people/9'
      }]
    }
  },
  methods: {
    submitChat () {
      const self = this;
      const text = self.messagebar.getValue().replace(/\n/g, '<br>').trim();

      if (text.length === 0) {
        // exit when empty messagebar text is empty
        return
      }

        // Clear messagebar area
      self.messagebar.clear()

        // Focus area
      if (text.length) self.messagebar.focus()

        // Add sent message
      self.messagesData.push({
        text
      })
    },
    onChange (text) {
      console.log('changed')
    },
    isFirstMessage (message, index) {
      const self = this
      const previousMessage = self.messagesData[index - 1]
      if (message.isTitle) return false
      if (!previousMessage || previousMessage.type !== message.type || previousMessage.name !== message.name) return true
      return false
    },
    isLastMessage (message, index) {
      const self = this
      const nextMessage = self.messagesData[index + 1]
      if (message.isTitle) return false
      if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true
      return false
    },
    isTailMessage (message, index) {
      const self = this
      const nextMessage = self.messagesData[index + 1]
      if (message.isTitle) return false
      if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true
      return false
    },
    onF7Ready () {
      const self = this
      self.messagebar = self.$refs.messagebar.f7Messagebar
      self.messages = self.$refs.messages.f7Messages
    }
  }
}
</script>
