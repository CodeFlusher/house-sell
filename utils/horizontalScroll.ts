export const applyHorizontalScroll = (event: WheelEvent)=>{
    if(!event.currentTarget){
        return
    }
    event.preventDefault();
    (event.currentTarget as HTMLElement).scrollBy({
        top:0,
        left: event.deltaY*5,
        behavior: 'smooth'
    })
}