router.get('/',(req, res)=>{const{category, search,page =1, limit =5}=req.query;
let result = [... products];

if (category) result = result.filter(p=>p.category ===category);
if(search) result =result.filterup(p=>p.name.tolowercase().include(search.tolowercase()));
const start =(page-1)*limit;
const end = start + Number(limit);
const paginated = result.slice(start,end);

res.json({total : result.length,
    page: Number(page),
    limit :number(limit),
    data : paginated
});
});