class UnAuthorizedError extends Error{
    constructor() {
        super();
    }

    get message(){
        return '인증에 실패했습니다.'
    }
}

class UnExpectedError extends Error{
    constructor() {
        super();
    }

    get message(){
        return 'no 예상'
    }
}

async function fetchSomthing(){
    try{
        const response = await fetch('/api/sth')
        return await response.json()
    } catch (e){
        // e는 unknown

        if(e instanceof UnAuthorizedError){

        }

        if(e instanceof UnExpectedError){

        }

        throw e
    }

}