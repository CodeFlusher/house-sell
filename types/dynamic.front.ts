
export type MainPageCard = {
    name: string,
    description: string,
    icon: Component,
}

export type MobileNavButton = {
    id: string,
    icon: Component,
}

export type OrderPhase = {
    id: string,
    use: boolean,
}

export type PlacesPageCity = {
    name: string,
    description: string,
    amount: number,
    img: string,
    teams: number,
}

export type DesignerCard = {
    name: string,
    image: string,
    description: string,
    rating: number,
}

export type ProjectProductCard = {
    id: number,
    img: string,
    name: string,
    description: string,
    planState: boolean,
    designState: boolean,
    buildState: boolean,
    renewState: boolean,
    area: number,
    buildingType: string,
    price: number,
}

export type ComponentCard = {
    component: Component,
}