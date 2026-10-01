export const create = ({model , data , options = {}}) =>{
    return model.create([data] , options);
}

export const findOne = ({model , data , options = {}} = {}) =>{
    return model.findOne(data , options)
}