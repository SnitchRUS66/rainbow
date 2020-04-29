import Vue from "vue"
import Vuetify from "vuetify"
import HelloWorld from '@/components/HelloWorld.vue'
import { mount } from "@vue/test-utils"

describe('HelloWorld.vue', () => {
    let wrapper

    beforeEach(() => {
        Vue.use(Vuetify)
    })

    it('renders props.msg when passed', () => {
        const msg = 'new message'

        wrapper = mount(HelloWorld, {
            propsData: { msg }
        })

        expect(wrapper.find('h1').text()).toMatch(msg)
    })
})
