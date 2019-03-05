<template>
    <div class="multiselect">
        <h3>multiselect</h3>
        <div class="col">
            <label class="typo__label">Single select from array</label>
            <multiselect
                    class="msel"
                    v-model="singleSelect.multiselectValue"
                    :options="singleSelect.multiselectData"
                    :searchable="true"
                    :show-labels="true"
                    :close-on-select="true"
                    placeholder="Pick a value "
            ></multiselect>
            <pre class="language-json"><code>{{ singleSelect.multiselectValue  }}</code></pre>
        </div>
        <div class="col">
            <label class="typo__label">Single select from object</label>
            <multiselect
                    v-model="objectSelect.multiselectValue"
                    deselect-label="Can't remove this value"
                    track-by="name"
                    label="name"
                    placeholder="Select one"
                    :options="objectSelect.multiselectData"
                    :searchable="false"
                    :allow-empty="false"
            >
                <template
                        slot="singleLabel"
                        slot-scope="{ option }"
                >
                    <strong>{{ option.name }}</strong> is written in<strong>  {{ option.language }}</strong>
                </template>
            </multiselect>
            <pre class="language-json"><code>{{ objectSelect.multiselectValue  }}</code></pre>
        </div>
        <div class="col">
            <label class="typo__label">Multi select from array with tags</label>
            <multiselect
                    class="msel"
                    v-model="tagSelect.multiselectValue"
                    :options="tagSelect.multiselectData"
                    :searchable="true"
                    :show-labels="true"
                    :close-on-select="true"
                    placeholder="Pick a value "
                    :taggable="true"
                    :multiple="true"
                    @tag="addTag"
            ></multiselect>
            <pre class="language-json"><code>{{ tagSelect.multiselectValue  }}</code></pre>
        </div>
        <div class="col">
            <label class="typo__label">Vuex example:</label>
            <multiselect placeholder="Pick action" :value="selectValue" :options="selectOptions" :searchable="false" @input="updateValueAction"></multiselect>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            singleSelect: {
                multiselectValue: null,
                multiselectData: ['Select option', 'options', 'selected', 'mulitple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched']
            },
            objectSelect: {
                multiselectValue: null,
                multiselectData: [
                    { name: 'Vue.js', language: 'JavaScript' },
                    { name: 'Rails', language: 'Ruby' },
                    { name: 'Sinatra', language: 'Ruby' },
                    { name: 'Laravel', language: 'PHP', $isDisabled: true },
                    { name: 'Phoenix', language: 'Elixir' }
                ]
            },
            tagSelect: {
                multiselectValue: null,
                multiselectData: ['Select option', 'options', 'selected', 'mulitple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched']
            },
        }
    },
    computed: {
        ...mapState({
            selectValue: state => state.multiselect.selectValue,
            selectOptions: state => state.multiselect.selectOptions
        })
    },
    methods: {
        ...mapActions('multiselect', ['updateValueAction']),
        addTag (newTag) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.tagSelect.multiselectData.push(tag)
            this.tagSelect.multiselectValue.push(tag)
        }
    }
}
</script>

<style>
    .col {
        display: block;
        width: 350px;
        float: left;
        margin-right: 15px;
    }
</style>
