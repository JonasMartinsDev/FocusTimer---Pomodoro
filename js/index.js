import Controls from "./controls.js"
import Timer  from "./timer.js"
import Events from './events.js'


import {
  minutesDisplay,
  secondsDisplay
} from './element.js'

import Sound from "./sounds.js"

const sound = Sound()

const controls = Controls()

const timer = Timer({ minutesDisplay, secondsDisplay})

Events({sound, controls, timer})

