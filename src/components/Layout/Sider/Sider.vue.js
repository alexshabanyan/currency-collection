import { ref } from 'vue';
import { useLayoutStore } from '../../../store/layout-store';
import { CompassOutlined } from '@ant-design/icons-vue';
const layoutStore = useLayoutStore();
const selectedKeys = ref(['1']);
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.ALayoutSider;
    /** @type { [typeof __VLS_components.ALayoutSider, typeof __VLS_components.aLayoutSider, typeof __VLS_components.ALayoutSider, typeof __VLS_components.aLayoutSider, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        collapsed: ((__VLS_ctx.layoutStore.menuCollapsedValue)),
        trigger: ((null)),
        collapsible: (true),
    }));
    const __VLS_2 = __VLS_1({
        collapsed: ((__VLS_ctx.layoutStore.menuCollapsedValue)),
        trigger: ((null)),
        collapsible: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = {}.AMenu;
    /** @type { [typeof __VLS_components.AMenu, typeof __VLS_components.aMenu, typeof __VLS_components.AMenu, typeof __VLS_components.aMenu, ] } */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
        selectedKeys: ((__VLS_ctx.selectedKeys)),
        theme: ("dark"),
        mode: ("inline"),
    }));
    const __VLS_9 = __VLS_8({
        selectedKeys: ((__VLS_ctx.selectedKeys)),
        theme: ("dark"),
        mode: ("inline"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = {}.AMenuItem;
    /** @type { [typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, typeof __VLS_components.AMenuItem, typeof __VLS_components.aMenuItem, ] } */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
        key: ("1"),
    }));
    const __VLS_15 = __VLS_14({
        key: ("1"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    const __VLS_19 = {}.CompassOutlined;
    /** @type { [typeof __VLS_components.CompassOutlined, typeof __VLS_components.compassOutlined, ] } */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_18.slots.default;
    var __VLS_18;
    __VLS_12.slots.default;
    var __VLS_12;
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
            CompassOutlined: CompassOutlined,
            layoutStore: layoutStore,
            selectedKeys: selectedKeys,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
