export const api = (url:string, options:any = null) => {
    return $fetch(`http://161.97.168.0:3000/gateway/${url}`, {
        ...options,
        defaultContentType: 'application/json',
        headers: {
            Authorization: `Bearer ${useCookie('gateway.accessToken').value}`
        },      
    })
}