import Layout from '@/components'
import CartItem from '@/components/CartItem'
import Image from 'next/image'
import React, { useState } from 'react'

const cart = () => {
  const [loading, setLoading] = useState(false)
  const subTotal = 342.0
  const handlePayment = () => { }
  return (
    <Layout>
      <div className='w-[100%] grid grid-cols-3 mt-32 mb-20 gap-10'>
        {/* Cart Items Start */}
        <div className='col-span-2'>
          <CartItem />
        </div>
        {/* Cart Items END */}
        {/* Summary Start */}
        <div className="flex-[1]">
          <div className="text-lg font-bold">Summary</div>

          <div className="p-5 my-5 bg-gray-100 rounded-xl">
            <div className="flex justify-between">
              <div className="uppercase text-md md:text-lg font-medium text-black">
                Subtotal
              </div>
              <div className="text-md md:text-lg font-medium text-black">
                ${subTotal}
              </div>
            </div>
            <div className="text-sm md:text-md py-5 border-t mt-5">
              The subtotal reflects the total price of
              your order, including duties and taxes,
              before any applicable discounts. It does
              not include delivery costs and
              international transaction fees.
            </div>
          </div>

          {/* BUTTON START */}
          <button
            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
            onClick={handlePayment}
          >
            Checkout
            {loading && <Image src="/spinner.svg" width={50} height={50} />}
          </button>
          {/* BUTTON END */}
        </div>
        {/* SUMMARY END */}
      </div>
    </Layout>
  )
}

export default cart