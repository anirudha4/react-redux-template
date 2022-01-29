import { api } from "@api"

export const get = async () => {
    const { data } =  await api({
        url: '/todos?_limit=10'
    })
    return data;
}