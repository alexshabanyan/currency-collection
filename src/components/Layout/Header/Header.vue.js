import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { useLayoutStore } from '../../../store/layout-store';
const layoutStore = useLayoutStore();
const changeMenuCollapsed = () => {
    layoutStore.setMenuCollapsed(!layoutStore.menuCollapsedValue);
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.ALayoutHeader;
    /** @type { [typeof __VLS_components.ALayoutHeader, typeof __VLS_components.aLayoutHeader, typeof __VLS_components.ALayoutHeader, typeof __VLS_components.aLayoutHeader, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ style: ({}) },
    }));
    const __VLS_2 = __VLS_1({
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    if (__VLS_ctx.layoutStore.menuCollapsed) {
        const __VLS_7 = {}.MenuUnfoldOutlined;
        /** @type { [typeof __VLS_components.MenuUnfoldOutlined, typeof __VLS_components.menuUnfoldOutlined, ] } */ ;
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
            ...{ 'onClick': {} },
            ...{ class: ("trigger") },
        }));
        const __VLS_9 = __VLS_8({
            ...{ 'onClick': {} },
            ...{ class: ("trigger") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_8));
        let __VLS_13;
        const __VLS_14 = {
            onClick: (__VLS_ctx.changeMenuCollapsed)
        };
        let __VLS_10;
        let __VLS_11;
        var __VLS_12;
    }
    else {
        const __VLS_15 = {}.MenuFoldOutlined;
        /** @type { [typeof __VLS_components.MenuFoldOutlined, typeof __VLS_components.menuFoldOutlined, ] } */ ;
        // @ts-ignore
        const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
            ...{ 'onClick': {} },
            ...{ class: ("trigger") },
        }));
        const __VLS_17 = __VLS_16({
            ...{ 'onClick': {} },
            ...{ class: ("trigger") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_16));
        let __VLS_21;
        const __VLS_22 = {
            onClick: (__VLS_ctx.changeMenuCollapsed)
        };
        let __VLS_18;
        let __VLS_19;
        var __VLS_20;
    }
    __VLS_5.slots.default;
    var __VLS_5;
    ['trigger', 'trigger',];
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
            MenuUnfoldOutlined: MenuUnfoldOutlined,
            MenuFoldOutlined: MenuFoldOutlined,
            layoutStore: layoutStore,
            changeMenuCollapsed: changeMenuCollapsed,
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
