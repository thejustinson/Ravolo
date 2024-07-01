const useTrimAddress = (address: string) => {
    let prefix = address.substring(0,5)
    let suffix = address.substring(address.length - 5)

    return (`${prefix}...${suffix}`)
}

export default useTrimAddress