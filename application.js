// TESTER = document.getElementById('tester');
//   Plotly.newPlot( TESTER, [{
//   x: [1, 2, 3, 4, 5],
//   y: [1, 2, 4, 8, 16] }], {
//   margin: { t: 0 } } );


const SCRIP_SECTOR = { 
'ACLBSL':'Microfinance',
'ADBL':'CommercialBanks',
'ADBLD83':'CorporateDebenture',
'AHPC':'HydroPower',
'AIL':'Non-LifeInsurance',
'AKBSL':'Microfinance',
'AKBSLP':'PromotorShare',
'AKJCL':'HydroPower',
'AKPL':'HydroPower',
'ALBSL':'Microfinance',
'ALICL':'LifeInsurance',
'ALICLP':'PromotorShare',
'AMFI':'Microfinance',
'API':'HydroPower',
'AVU':'ManufacturingAndProcessing',
'BARUN':'HydroPower',
'BBC':'Tradings',
'BFC':'Finance',
'BFCPO':'PromotorShare',
'BFLPO':'PromotorShare',
'BHBL':'DevelopmentBankLimited',
'BHBLPO':'PromotorShare',
'BNL':'ManufacturingAndProcessing',
'BNT':'ManufacturingAndProcessing',
'BOKD2079':'CorporateDebenture',
'BOKL':'CommercialBanks',
'BOKLPO':'PromotorShare',
'BPCL':'HydroPower',
'BSBLPO':'PromotorShare',
'BSL':'ManufacturingAndProcessing',
'BSM':'ManufacturingAndProcessing',
'CBBL':'Microfinance',
'CBBLPO':'PromotorShare',
'CBL':'CommercialBanks',
'CBLPO':'PromotorShare',
'CCBL':'CommercialBanks',
'CCBLPO':'PromotorShare',
'CEFL':'Finance',
'CEFLPO':'PromotorShare',
'CFCL':'Finance',
'CFCLPO':'PromotorShare',
'CFL':'Finance',
'CGH':'HotelsAndTourism',
'CHCL':'HydroPower',
'CHDC':'HydroPower',
'CHL':'HydroPower',
'CIT':'Investment',
'CLBSL':'Microfinance',
'CLBSLP':'PromotorShare',
'CMB':'Finance',
'CMBFLP':'PromotorShare',
'CMF1':'MutualFund',
'CMF2':'MutualFund',
'CORBL':'DevelopmentBankLimited',
'CZBIL':'CommercialBanks',
'CZBILP':'PromotorShare',
'DDBL':'Microfinance',
'DDBLPO':'PromotorShare',
'DHPL':'HydroPower',
'EBL':'CommercialBanks',
'EBLCP':'PreferredStock',
'EBLD2078':'CorporateDebenture',
'EBLPO':'PromotorShare',
'EDBL':'DevelopmentBankLimited',
'EDBLPO':'PromotorShare',
'EIC':'Non-LifeInsurance',
'EICPO':'PromotorShare',
'FBBLPO':'PromotorShare',
'FHL':'ManufacturingAndProcessing',
'FMDBL':'Microfinance',
'FMDBLP':'PromotorShare',
'FOWAD':'Microfinance',
'FOWADP':'PromotorShare',
'GBBL':'DevelopmentBankLimited',
'GBBLPO':'PromotorShare',
'GBD80/81':'CorporateDebenture',
'GBIME':'CommercialBanks',
'GBIMEP':'PromotorShare',
'GBLBS':'Microfinance',
'GBLBSP':'PromotorShare',
'GDBL':'DevelopmentBankLimited',
'GDBLPO':'PromotorShare',
'GFCL':'Finance',
'GFCLPO':'PromotorShare',
'GGBSL':'Microfinance',
'GHL':'HydroPower',
'GIC':'Non-LifeInsurance',
'GILB':'Microfinance',
'GIMES1':'MutualFund',
'GLBSL':'Microfinance',
'GLH':'HydroPower',
'GLICL':'LifeInsurance',
'GLICLP':'PromotorShare',
'GMFBS':'Microfinance',
'GMFIL':'Finance',
'GMFILP':'PromotorShare',
'GRDBL':'DevelopmentBankLimited',
'GRDBLP':'PromotorShare',
'GRU':'ManufacturingAndProcessing',
'GUFL':'Finance',
'GUFLPO':'PromotorShare',
'GWFD83':'CorporateDebenture',
'HAMRO':'DevelopmentBankLimited',
'HAMROP':'PromotorShare',
'HATH':'Finance',
'HATHPO':'PromotorShare',
'HBL':'CommercialBanks',
'HBLD83':'CorporateDebenture',
'HBLPO':'PromotorShare',
'HBT':'ManufacturingAndProcessing',
'HDHPC':'HydroPower',
'HDL':'ManufacturingAndProcessing',
'HFL':'Finance',
'HGI':'Non-LifeInsurance',
'HGIPO':'PromotorShare',
'HIDCL':'Investment',
'CHDC':'Investment',
'HPPL':'HydroPower',
'HURJA':'HydroPower',
'ICFC':'Finance',
'ICFCD83':'CorporateDebenture',
'ICFCPO':'PromotorShare',
'IGI':'Non-LifeInsurance',
'IGIPO':'PromotorShare',
'ILBS':'Microfinance',
'JBBL':'DevelopmentBankLimited',
'JBBLPO':'PromotorShare',
'JBNL':'CommercialBanks',
'JBNLPO':'PromotorShare',
'JFL':'Finance',
'JFLPO':'PromotorShare',
'JLI':'LifeInsurance',
'JOSHI':'HydroPower',
'JSLBB':'Microfinance',
'JSLBBP':'PromotorShare',
'JSM':'ManufacturingAndProcessing',
'KBL':'CommercialBanks',
'KBLD86':'CorporateDebenture',
'KBLPO':'PromotorShare',
'KEF':'MutualFund',
'KKHC':'HydroPower',
'KLBSL':'Microfinance',
'KMCDB':'Microfinance',
'KMCDBP':'PromotorShare',
'KNBL':'DevelopmentBankLimited',
'KNBLPO':'PromotorShare',
'KPCL':'HydroPower',
'KRBL':'DevelopmentBankLimited',
'KRBLPO':'PromotorShare',
'KSBBL':'DevelopmentBankLimited',
'KSBBLP':'PromotorShare',
'LBBL':'DevelopmentBankLimited',
'LBBLPO':'PromotorShare',
'LBL':'CommercialBanks',
'LBLD86':'CorporateDebenture',
'LBLPO':'PromotorShare',
'LEC':'HydroPower',
'LEMF':'MutualFund',
'LFC':'Finance',
'LFCPO':'PromotorShare',
'LGIL':'Non-LifeInsurance',
'LGILPO':'PromotorShare',
'LICN':'LifeInsurance',
'ULI':'LifeInsurance',
'LICNPO':'PromotorShare',
'LLBS':'Microfinance',
'LLBSPO':'PromotorShare',
'LUK':'MutualFund',
'MBL':'CommercialBanks',
'MBLD2085':'CorporateDebenture',
'MBLPO':'PromotorShare',
'MDB':'DevelopmentBankLimited',
'MDBLPO':'PromotorShare',
'MDBPO':'PromotorShare',
'MEGA':'CommercialBanks',
'MEGAPO':'PromotorShare',
'MEN':'HydroPower',
'MERO':'Microfinance',
'MSLBSL':'Microfinance',
'MEROPO':'Microfinance',
'MFIL':'Finance',
'MFILPO':'PromotorShare',
'MFLD85':'CorporateDebenture',
'MHNL':'HydroPower',
'MLBBL':'Microfinance',
'MLBBLP':'PromotorShare',
'MLBL':'DevelopmentBankLimited',
'MLBLPO':'PromotorShare',
'MLBSL':'Microfinance',
'JBLB':'Microfinance',
'MMFDB':'Microfinance',
'MMFDBP':'PromotorShare',
'MNBBL':'DevelopmentBankLimited',
'MNBBLP':'PromotorShare',
'MPFL':'Finance',
'MPFLPO':'PromotorShare',
'MSLB':'Microfinance',
'MSLBP':'PromotorShare',
'MSMBS':'Microfinance',
'NABBC':'DevelopmentBankLimited',
'NABIL':'CommercialBanks',
'NABILP':'PromotorShare',
'NADEP':'Microfinance',
'NADEPP':'PromotorShare',
'NAGRO':'Microfinance',
'NBB':'CommercialBanks',
'NBBD2085':'CorporateDebenture',
'NBBPO':'PromotorShare',
'NBBU':'ManufacturingAndProcessing',
'NBF2':'MutualFund',
'NBL':'CommercialBanks',
'NBLD82':'CorporateDebenture',
'NCCB':'CommercialBanks',
'NCCBPO':'PromotorShare',
'NEF':'MutualFund',
'NFD':'Others',
'NFS':'Finance',
'NFSPO':'PromotorShare',
'NGPL':'HydroPower',
'NHDL':'HydroPower',
'NHPC':'HydroPower',
'NIB':'CommercialBanks',
'NIBD2082':'CorporateDebenture',
'NIBLPF':'MutualFund',
'NIBPO':'PromotorShare',
'NIBSF1':'MutualFund',
'NICA':'CommercialBanks',
'NICAD 85/86':'CorporateDebenture',
'NICAD8182':'CorporateDebenture',
'NICAD8283':'CorporateDebenture',
'NICAP':'PromotorShare',
'NICBF':'MutualFund',
'NICD83/84':'CorporateDebenture',
'NICGF':'MutualFund',
'NICL':'Non-LifeInsurance',
'NICLBSL':'Microfinance',
'NICLPO':'PromotorShare',
'NIDC':'DevelopmentBankLimited',
'NIDCPO':'PromotorShare',
'NIFRA':'Investment',
'NIL':'Non-LifeInsurance',
'NILPO':'PromotorShare',
'NKU':'ManufacturingAndProcessing',
'NLBBL':'Microfinance',
'NLBBLP':'PromotorShare',
'NLG':'Non-LifeInsurance',
'NLGPO':'PromotorShare',
'NLIC':'LifeInsurance',
'NLICL':'LifeInsurance',
'NLICLP':'PromotorShare',
'NLICP':'PromotorShare',
'NLO':'ManufacturingAndProcessing',
'NMB':'CommercialBanks',
'NMB50':'MutualFund',
'NMBD2085':'CorporateDebenture',
'NMBHF1':'MutualFund',
'NMBMF':'Microfinance',
'NMBMFP':'PromotorShare',
'NMBPO':'PromotorShare',
'NMFBS':'Microfinance',
'NMFBSP':'PromotorShare',
'NRIC':'Others',
'NRN':'Investment',
'NSEWA':'Microfinance',
'NSM':'Finance',
'NSMPO':'PromotorShare',
'NTC':'Others',
'NTL':'Tradings',
'NUBL':'Microfinance',
'NUBLPO':'PromotorShare',
'NVG':'ManufacturingAndProcessing',
'NWC':'Tradings',
'ODBL':'DevelopmentBankLimited',
'ODBLPO':'PromotorShare',
'OHL':'HotelsAndTourism',
'PBLD84':'CorporateDebenture',
'PBLD86':'CorporateDebenture',
'PCBL':'CommercialBanks',
'PCBLP':'PromotorShare',
'PDBLPO':'PromotorShare',
'PFL':'Finance',
'PFLPO':'PromotorShare',
'PIC':'Non-LifeInsurance',
'PICL':'Non-LifeInsurance',
'PICLPO':'PromotorShare',
'PICPO':'PromotorShare',
'PLI':'LifeInsurance',
'PLIC':'LifeInsurance',
'PLICPO':'PromotorShare',
'PMHPL':'HydroPower',
'PPCL':'HydroPower',
'PRFLPO':'PromotorShare',
'PRIN':'Non-LifeInsurance',
'PRINPO':'PromotorShare',
'PROFL':'Finance',
'PROFLP':'PromotorShare',
'PRVU':'CommercialBanks',
'PRVUPO':'PromotorShare',
'PSDBLP':'PromotorShare',
'RADHI':'HydroPower',
'RBCL':'Non-LifeInsurance',
'RBCLPO':'PromotorShare',
'RHPC':'HydroPower',
'RHPL':'HydroPower',
'RJM':'ManufacturingAndProcessing',
'RLFL':'Finance',
'RLFLPO':'PromotorShare',
'RLI':'LifeInsurance',
'RMBFPO':'PromotorShare',
'RMDC':'Microfinance',
'RMDCPO':'PromotorShare',
'RRHP':'HydroPower',
'RSDC':'Microfinance',
'RSDCP':'PromotorShare',
'RURU':'HydroPower',
'SABSL':'Microfinance',
'SADBL':'DevelopmentBankLimited',
'SADBLP':'PromotorShare',
'SAEF':'MutualFund',
'SAND2085':'CorporateDebenture',
'SANIMA':'CommercialBanks',
'SAPDBL':'DevelopmentBankLimited',
'SAPDBLP':'PromotorShare',
'SBBLJ':'DevelopmentBankLimited',
'SBBLJP':'PromotorShare',
'SBCF':'MutualFund',
'SBD87':'CorporateDebenture',
'SBI':'CommercialBanks',
'SBIBD86':'CorporateDebenture',
'SBIPO':'PromotorShare',
'SBL':'CommercialBanks',
'SBLD2082':'CorporateDebenture',
'SBLD83':'CorporateDebenture',
'SBLD84':'CorporateDebenture',
'SBLPO':'PromotorShare',
'SBPP':'ManufacturingAndProcessing',
'SCB':'CommercialBanks',
'SCBPO':'PromotorShare',
'SDESI':'Microfinance',
'SDLBSL':'Microfinance',
'SEF':'MutualFund',
'SEOS':'MutualFund',
'SFC':'Finance',
'SFCL':'Finance',
'SFCLP':'PromotorShare',
'SFCPO':'PromotorShare',
'SFFIL':'Finance',
'SFFILP':'PromotorShare',
'SFMF':'MutualFund',
'SGI':'Non-LifeInsurance',
'SHBL':'DevelopmentBankLimited',
'SHEL':'HydroPower',
'SHINE':'DevelopmentBankLimited',
'SHINEP':'PromotorShare',
'SHIVM':'ManufacturingAndProcessing',
'SHL':'HotelsAndTourism',
'SHPC':'HydroPower',
'SIC':'Non-LifeInsurance',
'SICL':'Non-LifeInsurance',
'SICLPO':'PromotorShare',
'SICPO':'PromotorShare',
'SIFC':'Finance',
'SIFCPO':'PromotorShare',
'SIGS2':'MutualFund',
'SIL':'Non-LifeInsurance',
'SILPO':'PromotorShare',
'SINDU':'DevelopmentBankLimited',
'SINDUP':'PromotorShare',
'SJCL':'HydroPower',
'SKBBL':'Microfinance',
'SKBBLP':'PromotorShare',
'SLBBL':'Microfinance',
'SLBBLP':'PromotorShare',
'SLBS':'Microfinance',
'SLBSL':'Microfinance',
'SLBSP':'PromotorShare',
'SLCF':'MutualFund',
'SLICL':'LifeInsurance',
'SLI': 'LifeInsurance',
'SLICLP':'PromotorShare',
'SMATA':'Microfinance',
'SMB':'Microfinance',
'SMFBS':'Microfinance',
'SMFDB':'Microfinance',
'SMFDBP':'PromotorShare',
'SNLB':'Microfinance',
'SODBLP':'PromotorShare',
'SPARS':'Microfinance',
'SPDL':'HydroPower',
'SRBL':'CommercialBanks',
'SRBLD83':'CorporateDebenture',
'SRBLPO':'PromotorShare',
'SRD80':'CorporateDebenture',
'SRS':'ManufacturingAndProcessing',
'SSHL':'HydroPower',
'STC':'Tradings',
'SWBBL':'Microfinance',
'SWBBLP':'PromotorShare',
'SYFL':'Finance',
'SYFLPO':'PromotorShare',
'TMDBL':'DevelopmentBankLimited',
'TMDBLP':'PromotorShare',
'TRH':'HotelsAndTourism',
'TRHPR':'PreferredStock',
'UFL':'Finance',
'UFLPO':'PromotorShare',
'UIC':'Non-LifeInsurance',
'UICPO':'PromotorShare',
'UMHL':'HydroPower',
'UMRH':'HydroPower',
'UNHPL':'HydroPower',
'UNL':'ManufacturingAndProcessing',
'UPCL':'HydroPower',
'UPPER':'HydroPower',
'USLB':'Microfinance',
'VLBS':'Microfinance',
'VLBSPO':'PromotorShare',
'WOMI':'Microfinance',
'WOMIPO':'PromotorShare',
'YHL':'HotelsAndTourism',
}


// global variables
port_folio       = {}
nepse_price_list = {}
nepse_summary    = {}
nepse_index      = {}

nepse_top_gainers  = []
nepse_top_losers   = []
top_gainers_losers = []

watch_scrip_list = []





const NepseData = {
  data() {
    return {
      time: "",
      message: "press this button to reload the page ",
      nepse_summary: "",
      nepse_index  : "",
      nepse_sectors:new Set(Object.values(SCRIP_SECTOR)),
      scrips: Object.keys(SCRIP_SECTOR),
      port_folio_visibility: false,
      sector_wise_price_visibility: false,
      gainers_visibility: false,
      losers_visibility: false,
      demand_supply_visibility: false,
      watch_scrip_selected: "",
      global_time:"",
    }
  },

  mounted(){
    // setInterval(()=>this.time=new Date().toISOString(), 1000);
    var layout = {
                  autosize: false,
                  width: 600,
                  height: 300,
                  margin: {
                    l: 0,
                    r: 0,
                    b: 0,
                    t: 0,
                    pad: 4
                  },
                  paper_bgcolor: '#7f7f7f',
                  plot_bgcolor: '#c7c7c7',
                  yaxis: {
                          autotick: false,
                          ticks: 'outside',
                          tick0: 0,
                          dtick: 0.25,
                          ticklen: 8,
                          tickwidth: 4,
                          tickcolor: '#000'
                        }
                };
    Plotly.newPlot('plot_space', [{y:[]}], layout)

    setInterval(() => {this.global_time=new Date().toLocaleTimeString()}, 1000)

    setInterval( ()=> {
        fetch_data(url_index, 'GET', headers)
        .then((response) => {
                nepse_index = response;
                // this.nepse_index = response;
                //console.log(response)
                
                // update_table(this.nepse_index, "#index_table", ["indx", "previousClose", "high", "low", "close"])

                for (let temp_response of response){
                  if (temp_response['index'] === "NEPSE Index"){
                    nepse_val = parseFloat(temp_response['close']) + parseFloat(temp_response['change'])
                    this.nepse_index = temp_response['index'] +" : " + Math.round(nepse_val*100)/100 + " ( " + temp_response['change'] + ")" + "("  + new Date().toLocaleTimeString() +")\n"
                    Plotly.extendTraces('plot_space', {y:[[nepse_val]]}, [0])
                    break;
                  }
                }
              })
              .catch((error) => { this.time = "error loading page "  + new Date().toLocaleTimeString(); console.log(error)})

        fetch_data(url_summary, 'GET', headers)
              .then((response) => {
                nepse_summary = response;
                // this.nepse_summary = response;
                this.nepse_summary = response[0]['detail'] +" "+ parseFloat(response[0]['value']).toLocaleString()
                // console.log(this.nepse_summary)
                // update_table(this.nepse_summary, "#summary_table", ["detail", "value"])
              })
              .catch((error) => { this.time = "error loading page " +  new Date().toLocaleTimeString(); console.log(error)})

       fetch_data(url_subindices, 'GET', headers)
            .then((response) => {
              update_table(sub_index_table, response, ["index", "perChange"], "perChange", "desc");
            })
            .catch((error) => { this.time = "error loading page " +  new Date().toLocaleTimeString(); console.log(error)})


      }, 30*1000)


     setInterval( ()=> {

          fetch_data(url_top_gainer, 'GET', headers)
                    .then((response) => {
                     nepse_top_gainers = response
                     update_table(gainer_table ,response, ["symbol", "ltp", "pointChange", "percentageChange"], "percentageChange", "desc");
                     this.gainers_visibility=true;
                     this.time = "Top gainers updated " +  new Date().toLocaleTimeString()
                    })
                    .then(() => fetch_data(url_top_loser, 'GET', headers))
                    .then((response) => {
                         nepse_top_losers = response;
                         update_table(loser_table, response, ["symbol", "ltp", "pointChange", "percentageChange"], "percentageChange", "asc");
                         this.losers_visibility=true
                         this.time = "Top losers updated " +  new Date().toLocaleTimeString()
                    })
                    .then(() => {
                        
                        top_gainers_losers = [...nepse_top_losers, ...nepse_top_gainers]
                       
                        filtered_watch_list = filter_watch_list(top_gainers_losers, watch_scrip_list)
                        

                        update_table(watch_list_table, filtered_watch_list, ["symbol", "ltp", "pointChange" ,"percentageChange"], "percentageChange", "asc");
                      
                      })
                      .catch((error) => { this.time = "error loading page " +  new Date().toLocaleTimeString(); console.log(error)})



                  }, 30*1000)

        setInterval( ()=> {

                fetch_data(url_supply_demand, 'GET', headers)
                .then((response) => {
                  this.demand_supply_visibility = true 
                  demand_list = response['demandList']
                  supply_list = response['supplyList']


                  update_table(demand_table, demand_list, ["symbol", "totalOrder" ,"totalQuantity"], "totalQuantity", "desc");
                  update_table(supply_table, supply_list, ["symbol", "totalOrder" ,"totalQuantity"], "totalQuantity", "desc");

                  this.time = "Demand/supply updated " +  new Date().toLocaleTimeString()

                })
                .catch((error) => { this.time = "error loading page " +  new Date().toLocaleTimeString(); console.log(error)})
        }, 30*1000)
  },

  methods:{ click_btn(){
              this.time = "..."
              let t1 = "Sector data updated " + new Date().toLocaleTimeString()

              fetch_data(url_price_list, 'GET', headers)
              .then((response) => {
                //console.log("button click", response)
                let sector_information_added = apply_sector_information(response);
                let calculated_information = apply_diff_information(sector_information_added);
                // console.log(calculated_information)
                this.sector_wise_price_visibility = true
                this.nepse_sectors.forEach((sector) => {
                    sector_data = segregate_sector(calculated_information, sector)
                    // console.log('sector ', sector)
                    if (sector_data.length !== 0){
                      // console.log('table drawn')
                      update_table(sector_tables[sector], sector_data, ["symbol", "totalTradeQuantity", "lastTradedPrice","diff"], "totalTradeQuantity", "desc");
                      // console.log('table update')
                    };
                    // update_table(this.nepse_index, "#"+sector, ["indx", "previousClose", "high", "low", "close"])
                })
                // console.log('converted')
                nepse_price_list = convert_price_list_to_hashmap(calculated_information)
                this.time += "..."
                return nepse_price_list
              })
              .then((nepse_price_list) => {
                if (Object.keys(port_folio).length !== 0){
                // console.log("portfolio is not null", port_folio)
                // console.log(port_folio)

                port_folio.forEach( (elem) => {
                  try{
                    // console.log(elem['Scrip'])
                    // console.log(Object.keys(nepse_price_list[elem['Scrip']]))
                    let current_scrip = nepse_price_list[elem['Scrip']]
                    elem['diff'] = current_scrip['diff']
                    elem['price'] = current_scrip['lastTradedPrice']
                    elem['traded qty.'] = current_scrip['totalTradeQuantity']
                    elem['profit'] = elem['diff'] * elem['Current Balance']
                  }catch (error) {
                    elem['diff'] = 0
                    elem['price'] = 0
                    elem['traded qty.'] = 0
                    elem['profit'] = 0
                  }
                })
                this.port_folio_visibility = true 
                update_table(port_folio_table, port_folio, ["Scrip", "Current Balance", "price", "diff", "profit"], "profit", "desc");


              }
                this.time = t1 //update the time at the end
              })
              .catch((error) => { this.time = "error loading page"; console.log(error)})

              // update_table(this, url_summary,    'GET', headers, "#summary_table", ["detail", "value"]);
              // update_table(this, url_index,      'GET', headers, "#index_table", ["indx", "previousClose", "high", "low", "close"]);
              // update_table(this, url_price_list, 'GET', headers, "#"+sector, ['symbol', 'totalTradeQuantity', 'lastTradedPrice']);

            },
          
          read_portfolio_file(event) {

            let fr = new FileReader();
            fr.readAsText(event.target.files[0]);
            fr.onload = () => {
              let return_object = parse_csv(fr.result);
              port_folio = return_object;
            }
          },
          watch_scrip_added(){
            watch_scrip_list.push(this.watch_scrip_selected)

            filtered_watch_list = filter_watch_list(top_gainers_losers, watch_scrip_list);
            update_table(watch_list_table, filtered_watch_list, ["symbol", "ltp", "pointChange" ,"percentageChange"], "percentageChange", "asc");
            
          },
          watch_scrip_removed(){
              if (watch_scrip_list.length !=0 ){
                watch_scrip_list.pop()

                filtered_watch_list = filter_watch_list(top_gainers_losers, watch_scrip_list);
                update_table(watch_list_table, filtered_watch_list, ["symbol", "ltp", "pointChange" ,"percentageChange"]), "percentageChange", "asc";
            }
            
          },
      },
};


Vue.createApp(NepseData).mount('#Nepse')

function parse_csv(csv){

  csv = csv.replaceAll("\"", "");
  let array = csv.split("\n");
  let result = [];

  let headers = array[0].split(",")

//   console.log(array, headers)
  for (let i = 1; i < array.length - 2; i++) {
   let row_obj = {}
   let row = array[i].split(',');
   
   for(let j = 1; j < headers.length; j++) {
     if (j == 1) {
       row_obj[headers[j]] = row[j]
     }else{
       row_obj[headers[j]] = parseFloat(row[j])
     }
   }
    
    result.push(row_obj);
  }
  return result;
}


function apply_sector_information(data){
  data.forEach( (elem) => {
    elem['sector'] = SCRIP_SECTOR[elem['symbol']];
  })
  return data;
}
function apply_diff_information(data){
  let return_dict = {}
  data.forEach( (elem) => {
    elem['diff'] = Math.round( (elem['lastTradedPrice'] - elem['previousClose']) *100 )/100
  })
  return data;
}
function convert_price_list_to_hashmap(price_list){
  let return_dict = {}
  price_list.forEach( (elem) => {
    return_dict[ elem['symbol'] ] = elem
  })
  return return_dict;
}

function segregate_sector(data, sector){
  let segregated_data = [];
  data.forEach( (elem) => {
    if (elem['sector'] === sector){
      segregated_data.push(elem);
    }
  });
  return segregated_data;
}

function fetch_data(url, method, headers){
  // console.log(url)
  return fetch(url, { 'method': method })
           .then((response) => response.json())
   //return fetch(allow_cors(url), { 'method': method, 'mode': 'no-cors', 'headers': headers })
   //      .then((response) => response.json())
   //        .then((obj) => JSON.parse(obj.contents))

}

function update_table(table, data, display_columns, order_by, asc_or_desc){
  let filtered_data = filter_column(data, display_columns);

  table.clearData()
  table.setData(filtered_data)
  table.setSort(order_by, asc_or_desc)
       // .then(()=> {
       //      table.redraw()
       //      table.redraw()
       //      console.log("update table", table.getData())
       //  })
}

function filter_column(data, display_columns){ 
  // df = new dfd.DataFrame(data)
  //             .loc({'columns': display_columns});
  // return df.to_json()
  //          .then((json) => JSON.parse(json))
  filtered_data = []
  // console.log(display_columns, data)
  data.forEach( (elem) => {
    temp_obj = {};

    display_columns.forEach((column) => {
      temp_obj[column] = elem[column]
    })
    // for (key in elem) {
    //   if (display_columns.includes(key)){
    //     temp_obj[key] = elem[key];
    //   }
    // };
    filtered_data.push(temp_obj);
  });
  return filtered_data;
};

function generate_table(table_identifier){
  return new Tabulator(table_identifier, {
                              height:"300px",
                              virtualDomBuffer:10,
                              autoColumns:true, //create columns from data field names
                              layout:"fitColumns",
                              responsiveLayout:"hide",  //hide columns that dont fit on the table
                              tooltips:false,            //show tool tips on cells
                              addRowPos:"bottom",          //when adding a new row, add it to the top of the table
                              history:false,             //allow undo and redo actions on the table
                              pagination:"local",       //paginate the data
                              paginationSize:13,         //allow 7 rows per page of data
                              movableColumns:false,      //allow column order to be changed
                              resizableRows:false,       //allow row order to be changed
                              // initialSort:[             //set the initial sort order of the data
                              //             {column:sort_by, 
                              //              dir:order}],
                              })
}

headers = ''

local_url = 'http://127.0.0.1:8000'
routes = {  
            'PriceVolume'    : '/PriceVolume',
            'Summary'        : '/Summary',
            'TopTenScrips'   : '/TopTenScrips',
            'SupplyDemand'   : '/SupplyDemand',
            'TopGainers'     : '/TopGainers',
            'TopLosers'      : '/TopLosers',
            'IsNepseOpen'    : '/IsNepseOpen',
            'NepseIndex'     : '/NepseIndex',
            'NepseSubIndices': '/NepseSubIndices'
         }

const url_price_list    = local_url + routes['PriceVolume']

const url_summary       = local_url + routes['Summary']


const url_top_ten       = local_url + routes['TopTenScrips']

const url_supply_demand = local_url + routes['SupplyDemand']



const url_top_gainer    = local_url + routes['TopGainers']
const url_top_loser     = local_url + routes['TopLosers']

const url_nepse_open    = local_url + routes['IsNepseOpen']


const url_index         = local_url + routes['NepseIndex']

const url_subindices    = local_url + routes['NepseSubIndices']

let url_cors_by_pass    = "https://api.allorigins.win/get?url="

function allow_cors(url){
  base_url = url_cors_by_pass + encodeURIComponent(url + "?random=" + (new Date()).getTime())
  return base_url;
}

function filter_watch_list(top_gainers_losers, watch_scrip_list){
  filtered_list = [];
  watch_scrip_list.forEach((watch_scrip) => {
        top_gainers_losers.forEach((compare_scrip) => {
          if (compare_scrip['symbol'] === watch_scrip){
              filtered_list.push(compare_scrip);
          };
        }); 
  })
  return filtered_list;
}



sub_index_table  = generate_table("#sub_indices")
watch_list_table = generate_table("#watch_list_table")
gainer_table     = generate_table("#gainers")
loser_table      = generate_table("#losers")
demand_table     = generate_table("#demand")
supply_table     = generate_table("#supply", "totalQuantity", "desc")

sector_tables = {}
for (let sector of new Set(Object.values(SCRIP_SECTOR))) {
  if (!['CorporateDebenture', 'PromotorShare', 'MutualFund', 'PreferredStock'].includes(sector)){
    console.log(sector)
    sector_tables[sector] = generate_table("#"+sector, "totalTradeQuantity", "desc");
  }
};

port_folio_table = generate_table("#nepse_portfolio", "diff", "desc")
