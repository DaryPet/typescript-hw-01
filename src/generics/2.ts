type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
}

function compare<T extends Pick<AllType, keyof AllType>, U extends Pick<AllType, keyof AllType>>(top1: T, bottom: U): AllType {
return {
 name: top1.name,
 color: top1.color,
 position: bottom.position,
 weight: bottom.weight,
}
}

const top1 = { name: "TopName", color: "green", position: 1, weight: 32 }
const bottom = { name: "BottomName", color: "orange", position: 10, weight: 10 }

const result = compare(top1, bottom)

console.log(result)