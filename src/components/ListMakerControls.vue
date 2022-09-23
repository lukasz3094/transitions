<template>
    <tfoot>
        <transition @beforeEnter="enter" mode="out-in">
            <tr v-if="showAdd" key="addcancel">
                <td></td>
                <td><input class="form-control" v-model="currentItem"></td>
                <td>
                    <button id="add" class="btn btn-sm btn-info" @click="handleAdd">
                        Dodaj
                    </button>
                    <button id="cancel" class="btn btn-sm btn-secondary" 
                            @click="showAdd = false">
                        Anuluj
                    </button>
                </td>
            </tr>
            <tr v-else key="show">
                <td colspan="4" class="text-center p-2">
                    <button class="btn btn-info" @click="showAdd = true">
                        Pokaz dodawanie
                    </button>
                </td>
            </tr>
        </transition>
    </tfoot>
</template>
<script>
    export default {
        data() {
            return {
                showAdd: false,
                currentItem: ""
            }
        },
        methods: {
            handleAdd() {
                this.$emit("add", this.currentItem)
                this.showAdd = false
            },
            enter(el) {
                console.log(el)
                let attr = ["data-mdb-toggle", "data-mdb-animation-reset", "data-mdb-animation"]
                let attrData = ["animation", "true", "fade-in"]
                attr.forEach((element, key) => {
                    el.setAttribute(element, attrData[key])
                })
                console.log(el.hasAttribute("data-mdb-animation"))
            }
        },
    }
</script>