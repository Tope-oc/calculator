"use client";

import { useState } from "react"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Calculator() {

  const [value, setValue] = useState("0");

  const handlekey = (key: string) => {
    if (value === "0") {
      setValue(key);
    } else {
      setValue(value + key);
    }
  }

  const handleClear = () => {
    setValue("0")
  }
  const handleCalculate = () => {
    const try {
      const result = new Function(`return ${value.replace(/[^0-9+\-\*/.]/g, "")}`)();

      setValue(String(result));
    } catch (error) {

    };
  };


  return (
    <div >
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950/40 flex items-center justify-center p-4">

        <div>
          <Card className='w-80 rounded-2xl bg-slate-950/70 backdrop-blur-3xl border border-white/10 inset-shadow-purple-950/30 shadow-2xl shadow-black/70 '>
            <CardHeader>
              <CardTitle className='uppercase text-sm tracking-widest text-slate-500'>Tope&apos;s calc</CardTitle>
            </CardHeader>
            <CardContent>
              <input type='text'
                value={value}
                readOnly
                className='w-full h-20 bg-slate-800/80 backdrop-blur-3xl rounded-xl text-slate-300 text-3xl text-right pr-4' />

              <div className='flex grid grid-cols-4 gap-4 pt-6 '>
                <button onClick={handleClear} className='col-span-3 bg-red-600/90 hover:bg-red-800/90 hover:text-red-300 text-red-100 p-2 rounded-lg '>C</button>

                <button onClick={() => handlekey("/")} className='bg-amber-600/90 hover:bg-amber-800/90 hover:text-amber-300 text-amber-100 p-2 rounded-lg '>/</button>

                <button onClick={() => handlekey("7")} className='bg-black/90 hover:bg-gray-950/90 hover:text-gray-400 text-slate-100 p-2 rounded-lg '>7</button>

                <button onClick={() => handlekey("8")} className='bg-black/90 hover:bg-gray-950/90 hover:text-gray-400 text-slate-100 p-2 rounded-lg '>8</button>

                <button onClick={() => handlekey("9")} className='bg-black/90 hover:bg-gray-950/90 hover:text-gray-400 text-slate-100 p-2 rounded-lg '>9</button>

                <button onClick={() => handlekey("*")} className='bg-amber-600/90 hover:bg-amber-800/90 hover:text-amber-300 text-amber-100 p-2 rounded-lg '>*</button>

                <button onClick={() => handlekey("4")} className='bg-black/90 hover:bg-gray-950/90 hover:text-gray-400 text-slate-100 p-2 rounded-lg '>4</button>

                <button onClick={() => handlekey("5")} className='bg-black/90 hover:bg-gray-950/90 hover:text-gray-400 text-slate-100 p-2 rounded-lg '>5</button>

                <button onClick={() => handlekey("6")} className='bg-black/90 hover:bg-gray-950/90 hover:text-gray-400 text-slate-100 p-2 rounded-lg '>6</button>

                <button onClick={() => handlekey("-")} className='bg-amber-600/90 hover:bg-amber-800/90 hover:text-amber-300 text-amber-100 p-2 rounded-lg '>-</button>

                <button onClick={() => handlekey("1")} className='bg-black/90 hover:bg-gray-950/90 hover:text-gray-400 text-slate-100 p-2 rounded-lg '>1</button>

                <button onClick={() => handlekey("2")} className='bg-black/90 hover:bg-gray-950/90 hover:text-gray-400 text-slate-100 p-2 rounded-lg '>2</button>

                <button onClick={() => handlekey("3")} className='bg-black/90 hover:bg-gray-950/90 hover:text-gray-400 text-slate-100 p-2 rounded-lg '>3</button>

                <button onClick={() => handlekey("+")} className='bg-amber-600/90 hover:bg-amber-800/90 hover:text-amber-300 text-amber-100 p-2 rounded-lg '>+</button>

                <button onClick={() => handlekey("0")} className='col-span-2 bg-black/90 text-slate-100 hover:bg-gray-950/90 hover:text-gray-400 p-2 rounded-lg '>0</button>

                <button onClick={() => handlekey(".")} className='bg-black/90 text-slate-100 hover:bg-gray-950/90 hover:text-gray-400 p-2 rounded-lg '>.</button>

                <button onClick={handleCalculate} className='bg-green-600/90 hover:bg-green-800/90 hover:text-green-300 text-green-100 p-2 rounded-lg '>=</button>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}
