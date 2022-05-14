class ColorController {
    static GetRandomColor(req, res){

        let data = "0123456789abcdef";
        let length = data.length;

        let result =  '';

        for(let i = 0; i < 6; i++){
            result += data.charAt(Math.floor(Math.random() * length));
        }

        res.status(200).json({
            ok: true,
            randomColor: '#' + result,
        })
    }
}


module.exports = ColorController