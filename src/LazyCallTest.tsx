

export function LazyCallTest() {
    
    console.log('I am parent Element');
    
    const child = <Child />
    const child2 = Child()

    console.log(child);
    console.log(child2);
    
    return (
        <div className="">
            {`I am parent Element`}
            {/* {child} */}
            {/* {child2} */}
        </div>
    )
};


export function Child() {
    console.log('i am child');
    
    return (
        <div className="">I am child</div>
    )
}