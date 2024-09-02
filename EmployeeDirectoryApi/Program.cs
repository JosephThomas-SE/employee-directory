using Microsoft.EntityFrameworkCore;
using EmployeeDirectoryApi.Data; // Replace 'YourNamespace' with your actual namespace
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers(); // For API controllers

// Add the DbContext to the services and configure it to use SQL Server
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configure Swagger/OpenAPI (optional)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Employee Management API", Version = "v1" });
});

var app = builder.Build();

// Serve static files from wwwroot
app.UseStaticFiles();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Employee Management API V1");
        c.RoutePrefix = string.Empty; // Swagger UI at the root
    });
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers(); // Map your API controllers

app.Run();
