package com.rtnmathpackage

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class MathPackage : TurboReactPackage() {
  override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
    return if (name == MathModule.NAME) {
      MathModule(reactContext)
    } else {
      null
    }
  }

  override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
    return ReactModuleInfoProvider {
      val moduleInfos: MutableMap<String, ReactModuleInfo> = HashMap()
      moduleInfos[MathModule.NAME] = ReactModuleInfo(
        MathModule.NAME,
        MathModule.NAME,
        false, // canOverrideExistingModule
        false, // needsEagerInit
        true,  // hasConstants
        false, // isCxxModule
        true   // isTurboModule
      )
      moduleInfos
    }
  }
}