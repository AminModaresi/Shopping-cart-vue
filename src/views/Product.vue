<template>
  <div class="border-b py-10">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 place-items-center" v-if="showItems">
        <div class="col-span-4 col-start-3">
          <img :src="product.image" class="w-full" alt="" />
        </div>
        <div class="col-span-4">
          <div class="product__content px-10">
            <p class="text-2xl text-gray-600 mb-5 text-center">
              {{ product.title }}
            </p>
            <p class="text-sm text-gray-400 mb-5">{{ product.description }}</p>
            <p class="text-sm text-gray-600 mb-3">$ {{ product.price }}</p>
            <base-button v-if="!cart" bg-gray="bgGray" @click="addToCart">
              Add To Cart
            </base-button>
            <div v-else class="flex">
              <base-button bg-gray="bgGray" @click="increaseNumber">
                +
              </base-button>
              <div class="bg-gray-300 p-3 mx-3 rounded">
                number of item : {{ cart.number }} , and price : ${{
                  cart.number * product.price
                }}
              </div>
              <base-button bg-gray="bgGray" @click="decreaseNumber">
                -
              </base-button>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12" v-else>
        <div class="col-span-4 col-start-3">
          <div class="h-64 w-full ant-skeleton"></div>
        </div>
        <div class="col-span-4">
          <div class="product__content p-3">
            <ul class="list-style-none">
              <li class="w-full h-5 ant-skeleton mb-4"></li>
              <li class="w-full h-5 ant-skeleton mb-4"></li>
              <li class="w-2/4 h-5 ant-skeleton mb-4"></li>
              <li class="w-1/4 h-3 ant-skeleton mb-4"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="container-fluid mx-auto">
      <div class="grid grid-cols-12">
            <BaseProduct v-for="product in ShowProducts" :product-price="product.price" :product-id="product.id" :product-title="product.title" :product-image="product.image" :key="product.id" />
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, ref, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  props: ["id"],
  setup(props) {
    let showItems = ref(false);
    const store = useStore();
    let itemId = ref(props.id)
    watch(() => props.id, (first) => {
      itemId.value = first
      getProduct()
    });
    async function getProduct() {
      showItems.value = false;
      await store.dispatch("ProductList/getProduct", itemId.value);
      showItems.value = true;
    }
    function getProductList() {
      store.dispatch("ProductList/getProductList");
    }
    onMounted(() => {
      getProduct();
      getProductList();
    });
    const product = computed(() => {
     const productItem = store.getters["ProductList/showProduct"];
      return productItem;
    });
    const ShowProducts = computed(() => {
      let productList = store.getters["ProductList/showProductList"];
      let customList = ref([]);
      for (let i in productList) {
        if (i < 12) {
            customList.value.push(productList[i])
        }
      }
      return customList.value;
    });
    const cart = computed(() => {
      let cartList = store.getters["Cart/showCartProduct"];
      cartList = cartList.find((item) => {
        return item.id == itemId.value;
      });
      return cartList;
    });
    function addToCart() {
      let cartProduct = {
        price: product.value.price,
        title: product.value.title,
        id: product.value.id,
        image : product.value.image
      };
      store.dispatch("Cart/setItemToCart", cartProduct);
    }
    function increaseNumber() {
      store.dispatch("Cart/increaseNumber", props.id);
    }
    function decreaseNumber() {
      store.dispatch("Cart/decreaseNumber", props.id);
    }
    return {
      product,
      addToCart,
      showItems,
      cart,
      increaseNumber,
      decreaseNumber,
      ShowProducts,
    };
  },
};
</script>