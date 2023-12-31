const cheerio=require('cheerio');
const request=require('request');

const bcrypt=require('bcrypt');
const moment=require('moment');


const encryptPassword=(password)=>{
    const salt=bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password,salt);
}

const matchPassword=(password,hash)=>bcrypt.compareSync(password,hash);

//task to validate time 
const scrappingDictionary=(word,fn)=>{
    const url=`https://dictionary.cambridge.org/us/dictionary/english-spanish/${word}`;
    const urls='https://dictionary.cambridge.org' 
    let  json={};
    
    request(url,(err,resp,html)=>{
        if(!err&& resp.statusCode==200){
                const $=cheerio.load(html);
                json.word=$('.di-title').first().text()
                json.type=$('.dpos').first().text()
                
                if(json.word!=''){
                    json.sounds=[];
                    $('.pron-info').each(function(){
                        const regionSound=cheerio.load($(this).html())
                        if(json.sounds.length < 2){
                            json.sounds.push({
                                region:regionSound('.region').text(),
                                phonetics:regionSound('.ipa').text(),
                                sound:urls+regionSound('source').attr('src')
                             })
                        }
                    })
                   //this line is used to add definition and examples
                   json.meaning=[]
                   $('.def-block').each(function (){
                         const $$=cheerio.load($(this).html())
                         const bodMenaing={
                               definition:$$('.ddef_d').text(),
                               spanishMeaning:$$('.dtrans-se').first().text().trim(),
                               level:$$('.dxref').text(),
                               examples:[],
                         }
                        $$('.dexamp').each(function (){
                            const exam=cheerio.load($$(this).html());
                            bodMenaing.examples.push({
                                    englishExample:exam('.eg').text().trim(),
                                    spanishExample:exam('.trans').text().trim()
                            })
                        })
     
                       json.meaning.push(bodMenaing)
                    })
                }
        
          json=json.word!=''?json:{message:'no hay datos'}
           fn(json)
        }else{
            fn({message:'no hay datos'})
        }
    })
}


module.exports={
    encryptPassword,
    matchPassword,
    scrappingDictionary
}