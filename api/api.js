export function inputtips(data) {
    var url="https://restapi.amap.com/v3/assistant/inputtips?parameters"
    data.key="24b12f24bfa490d4574a6c6b05ee321a"
    return request.request({
        url: url,
        method: 'GET',
        data: data,
    })
}