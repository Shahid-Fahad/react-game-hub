import axios from "axios";
import { addPointerInfo } from "framer-motion";

export default axios.create({
    baseURL:  'https://api.rawg.io/api',
    params:{
        key: "73b70e51393f4ac69458adc83aa2c2b0"
    }
})