import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
//import { useToast } from 'vue-toastification'

export const useIdopontfoglalasStore = defineStore('idopontfoglalas', () => {
  const idopontfoglalas = ref([])
  const foglalasok = ref([])  
  const toast = useToast()
  
  const loadAll = () => {
    fetch("http://localhost:3000/idopontfoglalas")
    .then(resp => resp.json())
    .then(data => idopontfoglalas.value = data)
  }

  const lefoglalas = (id) =>{    
    let o = {'id' : id, 'q' : 1}
    if (foglalasok.value.length == 0){
      foglalasok.value.push(o)
    } else {
      let index = foglalasok.value.findIndex(p => p.id == id)
      console.log(index)
      foglalasok.value[index].q += 1
    }    
  }

  const mentes = (p) => {
    console.log(p)
    idopontfoglalas.value.push(p)
    axios.post("http://localhost:3000/idopontfoglalas",p)
    .then(resp => {
      console.log(resp.statusText)
      toast("Sikeres mentés");
    })
    .catch(() => toast.error("Hiba"))
  }

  return { idopontfoglalas, foglalasok, loadAll, lefoglalas, mentes}
})
