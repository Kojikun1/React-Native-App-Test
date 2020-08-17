interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}
export function signIn(): Promise<Response>{
    return new Promise<any>((resolve,reject)=> {
        setTimeout(function() {
            resolve({
                user: {
                    name: "koji", 
                    email: "koji@gmail.com",
                },
                token: "102030wxyfdafdafdfdafdfad"
            })
        },1000)
    })
}