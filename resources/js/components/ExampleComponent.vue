<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example componentaa.<br>
                        Hoàng Toni đã ghé thăm.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Compontent mounted.')
            console.log('Hoang Toni con ghe tham console log nua ne.')
        }
    }
</script>
