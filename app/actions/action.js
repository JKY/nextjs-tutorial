'use server'
import { redirect } from "next/navigation"
export async function getType(result) {
    let state = { x1: 0, x2: 0, x3: 0, x4: 0, x5: 0, x6: 0, x7: 0, x8: 0, y1: 0, y2: 0, y3: 0, y4: 0, y5: 0, y6: 0, y7: 0, y8: 0, z1: 0, z2: 0, z3: 0, z4: 0, z5: 0, z6: 0, z7: 0, z8: 0 };
    result.forEach(key => {
        state[key]++;
    });
    let a = (state["x2"] + state["y2"] + state["z2"] - state["x1"] - state["y1"] - state["z1"]) / 22 * 10 > 0 ? "p" : "j";
    let b = (state["x3"] + state["y3"] + state["z3"] - state["x4"] - state["y4"] - state["z4"]) / 26 * 10 > 0 ? "s" : "n";
    let c = (state["x6"] + state["y6"] + state["z6"] - state["x5"] - state["y5"] - state["z5"]) / 21 * 10 > 0 ? "i" : "e";
    let d = (state["x8"] + state["y8"] + state["z8"] - state["x7"] - state["y7"] - state["z7"]) / 24 * 10 > 0 ? "t" : "f";
    redirect(`/personality/${c}${b}${d}${a}`);
}
