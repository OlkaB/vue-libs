<template>
    <div class="scopedSlots">
        <h3>scopedSlots</h3>
        <ScopedSlotCmp>
            <template slot-scope="{shape}">
                {{ shape.name }}
                <small>({{ shape.sides }} sides)</small>
            </template>
        </ScopedSlotCmp>
    </div>
</template>

<script>
import ScopedSlotCmp from '@/components/ScopedSlot.vue'

export default {
    components: {
        ScopedSlotCmp
    },
}
</script>
