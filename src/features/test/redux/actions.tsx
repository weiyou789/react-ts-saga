import {
    INCREMENT_ENTHUSIASM,
    INCREMENT_ENTHUSIASM_FINISH
} from './actionTypes'

export interface IncrementEnthusiasm{
    type:INCREMENT_ENTHUSIASM,
    Id:string
}

export interface IncrementEnthusiasmFinish{
    type:INCREMENT_ENTHUSIASM_FINISH
    Id:string
    demoData:object[]
}

export type EnthusiasmAction = IncrementEnthusiasm | IncrementEnthusiasmFinish;

