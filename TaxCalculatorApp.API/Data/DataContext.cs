using Microsoft.EntityFrameworkCore;
using TaxCalculatorApp.API.models;

namespace TaxCalculatorApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) { }

        public DbSet<Value> Values { get; set; }
    }
}