using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using HealthCare.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace HealthCare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiagnosesController : ControllerBase
    {
         private readonly IConfiguration _configuration;

        public DiagnosesController(IConfiguration configuration)
        {
            _configuration = configuration;
            
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select diagnoseid, patientsname,diagnosename,diagnosedescription, nursesname,
                           doctorsname
                           from diagnoses";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("HealthCareAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }


        [HttpPost]
        public JsonResult Post(Diagnoses dia)
        {
            string query = @"
                    insert into diagnoses(patientsname,diagnosename, diagnosedescription,
                           nursesname, doctorsname) 
                         values 
                    ('" + dia.patientsname + @"'
                     ,'" + dia.diagnosename + @"'
                     ,'" + dia.diagnosedescription + @"'
                     ,'" + dia.nursesname + @"'
                     ,'" + dia.doctorsname + @"'
                     )";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("HealthCareAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }


        [HttpPut]
        public JsonResult Put(Diagnoses dia)
        {
            string query = @"
                    update diagnoses set 
                    patientsname = '" + dia.patientsname + @"'
                    ,diagnosename = '" + dia.diagnosename + @"'
                    ,diagnosedescription = '" + dia.diagnosedescription + @"'
                    ,nursesname = '" + dia.nursesname + @"'
                    ,doctorsname = '" + dia.doctorsname + @"'
                    where diagnoseid = " + dia.diagnoseid + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("HealthCareAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from diagnoses
                    where diagnoseid = " + id + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("HealthCareAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }
    }
}

    
