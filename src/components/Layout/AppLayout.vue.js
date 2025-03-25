import { ref } from 'vue';
import Sider from './Sider/Sider.vue';
import Header from './Header/Header.vue';
const collapsed = ref(false);
const selectedKeys = ref(['1']);
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.ALayout;
    /** @type { [typeof __VLS_components.ALayout, typeof __VLS_components.aLayout, typeof __VLS_components.ALayout, typeof __VLS_components.aLayout, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    // @ts-ignore
    /** @type { [typeof Sider, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(Sider, new Sider({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = {}.ALayout;
    /** @type { [typeof __VLS_components.ALayout, typeof __VLS_components.aLayout, typeof __VLS_components.ALayout, typeof __VLS_components.aLayout, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    // @ts-ignore
    /** @type { [typeof Header, ] } */ ;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(Header, new Header({}));
    const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
    const __VLS_23 = {}.ALayoutContent;
    /** @type { [typeof __VLS_components.ALayoutContent, typeof __VLS_components.aLayoutContent, typeof __VLS_components.ALayoutContent, typeof __VLS_components.aLayoutContent, ] } */ ;
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({
        ...{ style: (({ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' })) },
    }));
    const __VLS_25 = __VLS_24({
        ...{ style: (({ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' })) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    var __VLS_29 = {};
    __VLS_28.slots.default;
    var __VLS_28;
    __VLS_17.slots.default;
    var __VLS_17;
    __VLS_5.slots.default;
    var __VLS_5;
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Sider: Sider,
            Header: Header,
        };
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
