import Link from 'next/link'
import React from 'react'

const products = (props) => {
  return (
    <div className='container mx-auto px-4'><section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - MyShop</h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Buy from list of our products</p>
      </div>
      <div class="flex flex-wrap -m-4">
        {props.products.data.map((item) => {
          return (
            <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class="h-40 rounded w-full object-cover object-center mb-6" src={item.attributes.image.data.attributes.formats.thumbnail.url && item.attributes.image.data} alt="content"/>
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.name}</h2>
              <p class="leading-relaxed text-base">{item.attributes.description}</p>
              <a href={ `./product/(${item.attributes.slug}` }><button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button></a>
            </div>
          </div>
          )
        })}

      </div>
    </div>
  </section></div>
  )
}

export async function getServerSideProps(context) {
  let headers = { Authorization: "Bearer 881a8a39bc5e895a00df6c35af087f38f1c62580f5cf735f24c00c7572f3a2240c92ba686dad4f83f351551f2f3487a78dec12f65c130695aec88399eb8145cd2bd9020342dae0210e6547ff7081f74083444218847cafebacfc8f6d6e6aa8e11fc5d76b55d86afb9fa2b46a696eac308cc7f9c98bff31fbe47535949de172d2"}
  let a = await fetch("http://localhost:1337/api/products?populate=*", {headers:headers})
  let products = await a.json()
console.log(products)
  return {
    props: {products: products},
  }
}

export default products
