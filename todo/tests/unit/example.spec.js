import { shallowMount } from '@vue/test-utils'
import ListElement from '@/components/ListElement.vue'
import "regenerator-runtime";

describe('tests of ListElement component ', () => {
    it('renders probs todo object when passed', () => {
        const todo = { text: "todotest", status: 1 }
        const wrapper = shallowMount(ListElement, {
            propsData: { todo }
        })

        expect(wrapper.text()).toMatch(todo.text)
    });

    it('Is a Vue Instance', async() => {
        const todo = { text: "todotest", status: 1 }
        const wrapper = shallowMount(ListElement, {
            propsData: { todo }
        })

        expect(wrapper.isVueInstance).toBeTruthy();
    });
})