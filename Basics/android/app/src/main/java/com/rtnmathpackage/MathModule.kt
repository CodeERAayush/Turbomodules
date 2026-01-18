package com.rtnmathpackage

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.rtnmathpackage.NativeMathSpec

class MathModule(reactContext: ReactApplicationContext) : NativeMathSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun add(a: Double, b: Double, promise: Promise) {
    promise.resolve(a + b)
  }
  override fun sub(a: Double, b: Double, promise: Promise) {
    promise.resolve(a - b)
  }

  companion object {
    const val NAME = "RTNMath"
  }
}