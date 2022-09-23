<template>
    <div class="mx-5 p-2 bprder bprder-dark">
        <h3 class="bg-info text-white text-center p-2">Moja lista</h3>
        <table class="table table-sm">
            <tr><th>#</th><th>Element</th><th width="20%" colspan="2"></th></tr>
            <transition-group enter-active-class="animate__animated animate__fadeIn"
                    leave-active-class="animate__animated animate__fadeOut"
                    move-class="time" tag="tbody">
                <tr v-for="(item, i) in items" v-bind:key="item">
                    <td>{{ i }}</td>
                    <td>{{ item }}</td>
                    <td>
                        <button class="btn btn-sm btn-info" @click="moveItem(i)">
                            Przenieś
                        </button>
                        <button class="btn btn-sm btn-danger" @click="removeItem(i)">
                            Usuń
                        </button>
                    </td>
                </tr>
            </transition-group>
            <controls @add="addItem" />
        </table>
    </div>
</template>
<script>
    import Controls from "./ListMakerControls"
    export default {
        components: {
            Controls
        },
        data() {
            return {
                items: ["Jabłka", "Pomarańcze", "Winogrona"]
            }
        },
        methods: {
            addItem(item) {
                this.items.push(item)
            },
            removeItem(index) {
                this.items.splice(index, 1)
            },
            moveItem(index) {
                this.items.push(...this.items.splice(index, 1))
            }
        },
    }
</script>
<style>
    .time {
        transition: all 250ms;
    }
</style>